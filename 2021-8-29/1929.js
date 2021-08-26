// https://www.acmicpc.net/problem/1929

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(x => parseInt(x));


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


let result = '';
for (let i = input[0]; i<= input[1]; i++ ){

    if (isPrime(i)) {
        result += `${i}\n`;
    }
}

console.log(result);

