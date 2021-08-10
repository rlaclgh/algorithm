// https://www.acmicpc.net/problem/2133

const input = require("fs").readFileSync("/dev/stdin").toString();

const num = Number(input);

if (num % 2 == 1) {
    console.log(0);
} else {
    const DP = new Array(num+1).fill(0);

    DP[2] = 3
    DP[4] = 11

    for (let i=6; i<= num; i+=2) {

        let temp = 2; 
        for (let j=i-2; j>=0; j-=2) {
            if (j == i-2) {
                temp += DP[j] * 3;
            } else {
                temp += DP[j] * 2;
            }
        }
        DP[i] = temp;
    }
    console.log(DP[num]);
}