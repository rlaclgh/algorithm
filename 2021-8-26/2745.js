// https://www.acmicpc.net/problem/2745

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const word = input[0];
const reversedWord = word.split("").reverse().join("");
const number = parseInt(input[1]);

// A -> 65 , Z -> 90

const dict = {};

for (let i=0; i<= 25; i++) {
    dict[String.fromCharCode(i+65)] = 10 + i;
}

for (let i=0; i<=9; i++ ){
    dict[i] = i;
}

let result = 0;

for (let i=0; i<= word.length -1; i++) {

    result += ( number**i ) * dict[reversedWord[i]];

}
console.log(result);

