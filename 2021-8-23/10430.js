// https://www.acmicpc.net/problem/10430

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log((a+b) %c);
console.log(((a%c) + (b%c))%c);
console.log((a*b) %c);
console.log(((a%c) * (b%c))%c);
