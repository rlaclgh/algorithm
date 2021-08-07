// https://www.acmicpc.net/problem/1463

const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);

const DP = new Array(num + 1).fill(0);
// DP[3] 은 3일 때의 최솟값을 의미한다. 
for (let i = 2; i <= num; i++) {

    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
}
console.log(DP[num]);