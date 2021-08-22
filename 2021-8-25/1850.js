// https://www.acmicpc.net/problem/1850

// 틀림 

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

function gcd(a,b) {
    if (Math.min(a,b) == 0 ) {
        return Math.max(a,b);
    }

    return gcd(Math.max(a,b) % Math.min(a,b) , Math.min(a,b));
}

console.log("1".toString().repeat(gcd(a,b)));