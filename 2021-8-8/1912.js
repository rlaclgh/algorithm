// https://www.acmicpc.net/problem/1912

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = [0, ...input[1].split(" ").map(x => parseInt(x))];


const DP = new Array(num+1).fill(0);

// DP[n] : n까지 최대값 ( n 포함 )

for (let i= 1; i<=num; i++ ) {
    DP[i] = Math.max(DP[i-1]+ numbers[i], numbers[i]);
}

console.log(Math.max(...DP.slice(1)));