// https://www.acmicpc.net/problem/1978

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input[1].split(" ").map(x=> parseInt(x));

function isPrime(num) {
    if (num == 1) {
        return false;
    }
    for (let i=2; i**2 <= num; i++ ){
        if (num % i == 0 ){
            return false;
        }
    }
    return true;
}

let result = 0;
for (let i=0; i<= numbers.length -1 ; i++ ){
    if (isPrime(numbers[i])) {
        result += 1;
    }
}

console.log(result);

