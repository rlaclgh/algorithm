// https://www.acmicpc.net/problem/2579

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = [0,...input.slice(1).map(x => parseInt(x))];

// DP[n][0] : n번째 밟고 그전 안밟음 
// DP[n][1] : n번째 밟고 그전 밟음 

if (num == 1) {
    console.log(numbers[1]);

} else {

    const DP = Array.from(Array(num+1), () => new Array(2).fill(0));
    DP[1][0] = numbers[1];
    DP[2][0] = numbers[2];
    DP[2][1] = numbers[2] + DP[1][0];
    for (let i=3; i<= num; i++ ) {
        DP[i][0] = Math.max(...DP[i-2]) + numbers[i];
        DP[i][1] = DP[i-1][0] + numbers[i];
    }
    console.log(Math.max(...DP[num]));
}
