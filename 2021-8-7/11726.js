// https://www.acmicpc.net/problem/11726


const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);

const DP = new Array(num + 1).fill(0);
// DP[n] 은 2 x n 을 채우는 방법의 수를 10007로 나눈 나머지이다.

DP[1] = 1;
DP[0] = 1;

for (let i = 2; i <= num; i++ ) {

    DP[i] = (DP[i-1] + DP[i-2]) % 10007;

}

console.log(DP[num]);