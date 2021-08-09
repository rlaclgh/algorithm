// https://www.acmicpc.net/problem/2133

const input = require("fs").readFileSync("/dev/stdin").toString();

const num = Number(input);

const DP = new Array(num+1).fill(0);

for (let i=1; i<=num; i++) {
    DP[i] = i;
}

for (let i=1; i<=num; i++ ){
    for(let j=2; Math.pow(j,2)<= i; j++) {
        DP[i] = Math.min(DP[i], DP[i - Math.pow(j,2)] +1);
    }
}

console.log(DP[num]);