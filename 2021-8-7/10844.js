// https://www.acmicpc.net/problem/10844

const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);

// const DP = new Array(num + 1).fill(Array(10).fill(0));
const DP = Array.from(Array(101), () => new Array(10));

DP[1] = new Array(10).fill(1);
DP[1][0] = 0; 


for (let i=2; i<= num; i++) {
    for (let j=0; j<= 9; j++) {
        
        if ( j == 0 ) {
            DP[i][j] = DP[i-1][j+1] % 1000000000;
        }else if ( j == 9 ) {
            DP[i][j] = DP[i-1][j-1] % 1000000000;
        } else {
            DP[i][j] = (DP[i-1][j-1] + DP[i-1][j+1]) % 1000000000;
        }

    }
}

console.log(String(DP[num].reduce((a,b) => a+b) % 1000000000));