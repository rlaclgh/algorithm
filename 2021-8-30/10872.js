// https://www.acmicpc.net/problem/10872

let num = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let result = 1;

for (let i=1; i<=num; i++) {
    result *= i;
}

console.log(result);