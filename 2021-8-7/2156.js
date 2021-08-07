
// https://www.acmicpc.net/problem/2156

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(x => parseInt(x));

const num = input[0];
const glasses = [0,...input.slice(1)];

const DP = Array.from(Array(num+1), () => new Array(3).fill(0));

// DP[n][0] : n 번째 마심 그전 0번 마심
// DP[n][1] : n 번째 마심 그전 1번 마심
// DP[n][2] : n 번째 안마심

DP[1][0] = glasses[1];
DP[1][1] = 0;
DP[1][2] = 0;

for (i=2; i<= num; i++) {
    DP[i][0] = DP[i-1][2] + glasses[i];
    DP[i][1] = DP[i-1][0] + glasses[i];
    DP[i][2] = Math.max(...DP[i-1]);
}

console.log(Math.max(...DP[num]));

