// https://www.acmicpc.net/problem/11055

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = [0, ...input[1].split(" ").map(x => parseInt(x))];

const DP = [0, ...input[1].split(" ").map(x => parseInt(x))];

// DP[n] : n번째로 끝나는 수열 중 최대값

for (let i = 1; i<= num; i++) {
    for (let j = 1; j<=i; j++) {
        if ( numbers[i] > numbers[j] ) {
            DP[i] = Math.max(DP[j] + numbers[i], DP[i]);
        }
    }
}

console.log(Math.max(...DP));
