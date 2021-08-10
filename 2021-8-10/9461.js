// https://www.acmicpc.net/problem/9461

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const numbers = [0, ...input[1].split(" ").map(x => parseInt(x))];

const DP = new Array(101).fill(0);
DP[1] = 1;
DP[2] = 1;
DP[3] = 1;
DP[4] = 2;
DP[5] = 2;
DP[6] = 3;
DP[7] = 4;
DP[8] = 5;
DP[9] = 7;
DP[10] = 9;

for ( i=11 ; i <= 100; i+= 6 ) {

    DP[i] = DP[i-1] + DP[i-5];
    DP[i+1] = DP[i] + DP[i-4];
    DP[i+2] = DP[i+1] + DP[i-3];
    DP[i+3] = DP[i+2] + DP[i-2];
    DP[i+4] = DP[i+3] + DP[i-1];
    DP[i+5] = DP[i+4] + DP[i];
}

for (i=1; i<=num; i++) {
    console.log(DP[input[i]]);
}