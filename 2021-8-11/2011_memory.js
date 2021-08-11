// https://www.acmicpc.net/problem/2011

const num = require("fs").readFileSync("/dev/stdin").toString();



if (num[0] == "0"){
    console.log(0);
} else if (!num) {
    console.log(0);
} else {
    const numbers = [0,...num.split("").map(x => parseInt(x))];

    const DP = Array(numbers.length).fill().map(() => Array(numbers.length).fill().map(() => Array(2).fill(0)));

    DP[1][1][1] = 1;

    for (let i=2; i<= numbers.length -1; i++ ) {
        
        DP[i][i][1] = 1;

        let from;

        if ( i % 2 == 0) {
            from = parseInt(i / 2);
        } else {
            from = parseInt(i/2)+1;
        }

        for (let j=from; j<= i-1; j++ ) {

            // 대각선 미사용 + 사용
            if ( DP[i-1][j-1][1] || DP[i-1][j-1][0]) {
                DP[i][j][1] += DP[i-1][j-1][1] % 1000000;
                DP[i][j][1] += DP[i-1][j-1][0] % 1000000;
            }
            // 옆 미사용
            if ( DP[i-1][j][1] & (numbers[i-1] == 1 || (numbers[i-1] == 2 & numbers[i]<=6 ))) {
                DP[i][j][0] += DP[i-1][j][1] % 1000000;
            }

        }
    }


    console.log(DP[numbers.length-1].flat().reduce((x,y) => x+y));

}