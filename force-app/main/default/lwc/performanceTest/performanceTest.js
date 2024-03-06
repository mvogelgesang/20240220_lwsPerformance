import { LightningElement } from "lwc";

export default class PerformanceTest extends LightningElement {
  isRunning = false;
  averageTime = 0;
  results = [];
  isLWSEnabled = this.hasLightningWebSecurityEnabled();
  testName = "";

  hasLightningWebSecurityEnabled() {
    try {
      new Worker();
      console.log("checking lws");
    } catch ({ message }) {
      if (message.includes("Lightning Web Security: Cannot create Worker")) {
        return "YES";
      }
    }
    return "NO";
  }
  get hasResults() {
    console.log("has results?", this.results.length)
    return this.results.length > 0;
  }
  // Function to measure performance
  measurePerformance(func) {
    this.isRunning = true;
    let times = [];
    for (let i = 0; i < 3; i++) {
      console.log("starting performance test... " + i);
      let start = performance.now();
      // Use call to ensure 'this' context is preserved
      func.call(this);
      let end = performance.now();
      times.push(end - start);
    }
    let average = times.reduce((a, b) => a + b, 0) / times.length;
    this.results = times;
    this.averageTime = average;
    this.isRunning = false;
  }

  // Functions to be measured
  createSet() {
    this.testName = "Array of Sets";
    console.log(this.testName);
    const arr = [];
    for (let i = 0; i < 20000; i++) {
      arr.push(new Set([[i]]));
    }
  }

  createMap() {
    this.testName = "Array of Maps";
    console.log(this.testName);
    const arr = [];
    for (let i = 0; i < 20000; i++) {
      arr.push(new Map([[i]]));
    }
    console.log(arr.length);
  }

  createDate() {
    this.testName = "Date Array";
    console.log(this.testName);
    const arr = [];
    for (let i = 0; i < 100000; i++) {
      arr.push(new Date(i).getDay());
    }
  }

  // Button click handlers
  measureSet() {
    this.measurePerformance(this.createSet);
  }

  measureMap() {
    this.measurePerformance(this.createMap);
  }

  measureDate() {
    this.measurePerformance(this.createDate);
  }
}
