// https://www.acmicpc.net/problem/11656

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const backs = [];

for (i=0; i<= input.length-1; i++ ){
    backs.push(input.slice(i));
}

backs.sort(function(a,b) { return (b < a) ? 1 : -1});

console.log(backs.join("\n"));