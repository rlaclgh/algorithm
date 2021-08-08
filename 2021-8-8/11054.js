// https://www.acmicpc.net/problem/11054

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);

const reversedNumbers = [0,...input[1].split(" ").map(x => parseInt(x)).reverse()];
const originNumbers =  [0,...input[1].split(" ").map(x => parseInt(x))];

// DP1[n] :  n 번째가 마지막인 증가 수열
// DP2[n] :  n 번째가 처음인 감소 수열

const DP1 = new Array(num+1).fill(1);
const DP2 = new Array(num+1).fill(1);
const totalDP = new Array(num).fill(0);

for (let i=1; i<= num; i++ ) {
    for (let j=1; j<= i; j++ ) {
        if (originNumbers[i] > originNumbers[j]) {
            DP1[i] = Math.max(DP1[j]+1 , DP1[i]);
        }

        if (reversedNumbers[i] > reversedNumbers[j]) {
            DP2[i] = Math.max(DP2[j]+1, DP2[i]);
        }
    }
}

const slicedDP1 = DP1.slice(1);
const reversedDP2 = DP2.slice(1).reverse();


for (let x=0; x< slicedDP1.length; x++ ){
    totalDP[x] = slicedDP1[x] + reversedDP2[x];
}

console.log(Math.max(...totalDP) - 1 );


