// https://www.acmicpc.net/problem/2225


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const n = parseInt(input[0]);
const k = parseInt(input[1]);

var memo = [[],[]];

var i, j;

memo[0][0] = 1;
for(let i=1;i<=n;i++){
    memo[0][i] = 0;
}

let sum;

for(let i=1;i<=k;i++){
    
    sum = 0;
    
    for(j=0;j<=n;j++){
        
        sum += memo[(i+1)%2][j];
        sum %= 1000000000;
        memo[i%2][j] = sum;
        
    }
    
}

console.log(memo[k%2][n]);