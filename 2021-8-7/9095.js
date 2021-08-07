// https://www.acmicpc.net/problem/9095

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const DP = new Array(11).fill(0);
// DP[n] n을 1,2,3의 합으로 나타내는 방법의 개수이다. 
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i=4; i<= 10; i++) {
    DP[i] = DP[i-1] + DP[i-2] + DP[i-3];
}

for (let i=1; i<= input.length-1;i++) {
    console.log(DP[parseInt(input[i])]);
}
