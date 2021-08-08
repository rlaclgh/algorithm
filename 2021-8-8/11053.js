// https://www.acmicpc.net/problem/11053


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const num = Number(input[0]);
const numbers = [0, ... input[1].split(" ").map(x => parseInt(x))]

const DP = new Array(num + 1).fill(1);


for (i = 1; i<= num; i++){
    for (j = 1; j<=i; j++) {
        if ( numbers[i] >  numbers[j]) {
            DP[i] = Math.max(DP[j]+1, DP[i]);
        }
    }
}

console.log(Math.max(...DP));


