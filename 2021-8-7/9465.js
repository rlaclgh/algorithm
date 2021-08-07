// https://www.acmicpc.net/problem/9465

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

for (let b=1; b<=parseInt(input[0]); b++) {

    const board = [];

    const num = parseInt(input[3*b -2]);
    board.push(new Array(num+1).fill(0));
    board.push([0, ...input[ 3*b - 1].split(" ").map(x => parseInt(x))]);
    board.push([0, ...input[ 3*b].split(" ").map(x => parseInt(x))]);
    
    const DP = Array.from(Array(num+1), () => new Array(3).fill(0));

    // DP[n][0] : n 번째 안삼  
    // DP[n][1] : n 번째 1번삼
    // DP[n][2] : n 번째 2번삼

    // board[n][m] : m행의 n번쩨 
    DP[1][0] = 0;
    DP[1][1] = board[1][1];
    DP[1][2] = board[2][1];

    for (i = 2; i<= num;i++) {
        DP[i][0] = Math.max(DP[i-1][0], DP[i-1][1],DP[i-1][2]);
        DP[i][1] = Math.max(DP[i-1][0], DP[i-1][2]) + board[1][i];
        DP[i][2] = Math.max(DP[i-1][0], DP[i-1][1]) + board[2][i];
    }

    console.log(Math.max(...DP[num]));


}