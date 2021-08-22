// https://www.acmicpc.net/problem/1934

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.splice(1).map(x => x.split(" "));

let result = "";

function gcd(a,b) {
    if (Math.min(a,b) == 0 ) {
        return Math.max(a,b);
    }

    return gcd(Math.max(a,b) % Math.min(a,b) , Math.min(a,b));
}

for (let i=0; i<= numbers.length-1; i++ ){
    const a = parseInt(numbers[i][0]);
    const b = parseInt(numbers[i][1]);
    result += `${a * b / gcd(a,b)}\n`
}

console.log(result);