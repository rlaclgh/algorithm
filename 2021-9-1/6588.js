// https://www.acmicpc.net/problem/1676

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(x => parseInt(x));

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

let result = ''
for (let j=0; j<= input.length-2; j++ ) {
    let num = input[j];
    for (let i=3; i<= parseInt(num / 2); i+= 2) {

        if (isPrime(i) & isPrime(num-i)) {
            result += `${num} = ${i} + ${num-i}\n`;
            break;
        }
    }
}


console.log(result);

