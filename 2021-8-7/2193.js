// https://www.acmicpc.net/problem/2193

const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);

const DP = Array.from(Array(num+1), () => new Array(2).fill(0));

// DP[n][0] 은 n 자리 이천수 중 0으로 끝나는 숫자의 개수
// DP[n][1] 은 n 자리 이천수 중 1으로 끝나는 숫자의 개수

DP[1][0] = 0;
DP[1][1] = 1;

for (i=2; i<= num; i++) {
    // 0 
    DP[i][0] = BigInt(DP[i-1][0] + DP[i-1][1]);
    // 1
    DP[i][1] = BigInt(DP[i-1][0]);
}

console.log(String(DP[num].reduce((a,b) => a+b)));