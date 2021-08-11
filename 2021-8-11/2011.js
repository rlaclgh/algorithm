// https://www.acmicpc.net/problem/2011

const num = require("fs").readFileSync("/dev/stdin").toString().trim();

if (num[0] == "0"){
    console.log(0);
} else if (!num) {
    console.log(0);
} else {
    const numbers = [0,...num.split("").map(x => parseInt(x))];

    const DP = Array(numbers.length+1).fill(0); 

    DP[0] = 1;
    DP[1] = 1;

    for (let i=2; i<= numbers.length-1; i++) {
        let cur = numbers[i];
        let cur2 = numbers[i] + numbers[i-1] * 10;

        if (cur >= 1 & cur <= 9) {
            DP[i] += DP[i-1];
        } 

        if (cur2>= 10 & cur2 <= 26) {
            DP[i] += DP[i-2];
        }

        DP[i] %= 1000000;
    }

    console.log(DP[numbers.length-1]);
}

