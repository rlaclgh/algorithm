// https://www.acmicpc.net/problem/10824

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");


const first = parseInt(input[0] + input[1]);
const second = parseInt(input[2] + input[3]);

console.log(first + second);