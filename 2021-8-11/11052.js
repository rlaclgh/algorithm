// https://www.acmicpc.net/problem/11052

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = [0,...input[1].split(" ").map(x=> parseInt(x))];

const DP = new Array(num+1).fill(0);

DP[1] = numbers[1];

for(let i=2; i<= num; i++ ) {

    DP[i] = numbers[i];

    for(let j=i-1; j>=1; j-- ){
        DP[i] = Math.max(DP[j]+numbers[i-j], DP[i]);
    }
    
}

console.log(DP[num]);