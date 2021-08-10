// https://www.acmicpc.net/problem/2225

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const n = parseInt(input[0]);
const r = parseInt(input[1]);

let up = 1;
let down = 1;

for(i=n+1; i<=n+r-1; i++ ){
    up *= i;
}

for (i=1; i<=r-1;i++) {
    down *= i;
}

console.log((up/down) % 1000000000);


