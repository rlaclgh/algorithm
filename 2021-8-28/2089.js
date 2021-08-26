// https://www.acmicpc.net/problem/2089

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num =  parseInt(input);

if (num == 0 ) {
    console.log(0);
} else {
    const result = [];

    while (num != 0) {

        // 
        if (num/-2 == Math.ceil(num/-2)) {
            result.push(0);
        } else {
            result.push(1);
        }
        num = Math.ceil(num/-2);
    }
    console.log(result.reverse().join(""));
}