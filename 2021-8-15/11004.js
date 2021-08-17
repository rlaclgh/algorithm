const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const index = parseInt(input[0].split(" ")[1]);
const numbers = input[1].split(" ").map(x => parseInt(x));

numbers.sort(function(a,b) { return a-b});

console.log(String(numbers[index-1]));