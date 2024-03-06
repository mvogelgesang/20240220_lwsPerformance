# lwsPerformance

Evaluate and replicate the findings from https://partners.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000001s8i&fId=0D54V00007ZFYo1&s1oid=00D300000000iTz&s1nid=0DB3000000007Uh&emkind=chatterGroupDigest&s1uid=0054V00000BuVNn&emtm=1708417264062&fromEmail=1&s1ext=0 where they noted performance between LWS and Locker have differences.

## Deployment & Observation

`sf project deploy start`
`sf org open -p /lightning/n/perfTest`

## Results

| Test Iteration | LWS (ms)   | Locker (ms) |
| -------------- | ---------- | ----------- |
| Set 1          | 142.400000 | 16.700000   |
| Set 2          | 126.600000 | 5.500000    |
| Set 3          | 139.400000 | 3.000000    |
| Set Avg        | 136.133333 | 8.400000    |

| Test Iteration | LWS (ms)   | Locker (ms) |
| -------------- | ---------- | ----------- |
| Map 1          | 139.100000 | 16.700000   |
| Map 2          | 240.300000 | 7.500000    |
| Map 3          | 378.700000 | 5.300000    |
| Map Avg        | 252.700000 | 9.833333    |

| Test Iteration | LWS (ms)   | Locker (ms) |
| -------------- | ---------- | ----------- |
| Date 1         | 239.000000 | 25.300000   |
| Date 2         | 474.000000 | 15.600000   |
| Date 3         | 227.800000 | 14.000000   |
| Date Avg       | 313.600000 | 18.300000   |
