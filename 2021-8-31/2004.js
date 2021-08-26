// https://www.acmicpc.net/problem/2004

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(x => parseInt(x));
const n = input[0];
const m = input[1];

function getFives(num) {
    let result = 0;
    for (let i=1; i<=num; i++) {

        let temp = i ;
    
        while (temp % 5 == 0 ) {
            result += 1;
            temp = temp /5;
        }
    }

    return result;
}

console.log(getFives(n) - (getFives(m) + getFives(n-m)));

