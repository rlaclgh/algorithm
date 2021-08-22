// https://www.acmicpc.net/problem/1158

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const num = parseInt(input[0]);
const numbers = Array.from({length:num},(_,i) => i+1);
const k = parseInt(input[1]);

const result = [];


let index = 0;
for (i=0; i<=num-1;i++ ) {
    
    index = (index -1 + k) % (num-i);
    const removed = numbers.splice(index,1)[0];
    result.push(removed);
}


console.log(`<${result.join(", ")}>`);