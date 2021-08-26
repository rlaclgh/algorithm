// https://www.acmicpc.net/problem/2004

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(x => parseInt(x));
const n = input[0];
const m = input[1];



function getFives(num) {
    let result = [0,0];
    for (let i=1; 5 ** i <= num; i++ ) {
        result[0] += parseInt(num / (5**i));
    }

    for (let i=1; 2** i <= num; i++ ) {
        result[1] += parseInt(num / (2**i));
    }

    return result;
}


console.log(Math.min(getFives(n)[0] - getFives(m)[0] - getFives(n-m)[0],getFives(n)[1] - getFives(m)[1] - getFives(n-m)[1] ))
