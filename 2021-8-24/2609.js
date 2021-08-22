// https://www.acmicpc.net/problem/2609

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

function gcd(a,b) {
    if (Math.min(a,b) == 0 ) {
        return Math.max(a,b);
    }

    return gcd(Math.max(a,b) % Math.min(a,b) , Math.min(a,b));
}

const result = gcd(a,b);

console.log(result);
console.log(a*b/result);