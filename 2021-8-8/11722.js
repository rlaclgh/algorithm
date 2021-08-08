 // https://www.acmicpc.net/problem/11722

 const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

 const num = parseInt(input[0]);
 const numbers = [0,...input[1].split(" ").map(x => parseInt(x))];

 const DP = new Array(num + 1).fill(1);
// DP[n] : n번째로 끝나는 감소수열의 최대개수

for (let i = 1; i<= num; i++ ){
    for (let j = 1; j<= i; j++) {
        if (numbers[i] < numbers[j]) {
            DP[i] = Math.max(DP[j]+1, DP[i]);
        }
    }
}

console.log(Math.max(...DP));
