
// https://www.acmicpc.net/problem/11057

const input = require("fs").readFileSync('/dev/stdin').toString();

const num = Number(input);

const DP = Array.from(Array(num+1), () => new Array(10).fill(0));

DP[1] = new Array(10).fill(1);

for (let i=2;i<=num;i++) {
    let temp = 0; 

    for (let j=0; j<=9;j++) {

        DP[i][j] = (temp + DP[i-1][j]) % 10007;
        temp += DP[i-1][j];

    }
}

console.log(DP[num].reduce((a,b) => a+b) % 10007);