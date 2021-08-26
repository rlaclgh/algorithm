// https://www.acmicpc.net/problem/11576

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const aType = parseInt(input[0].split(" ")[0]);
const bType = parseInt(input[0].split(" ")[1]);

const nNumber = parseInt(input[1]);

const numbers = input[2].split(" ").map(x => parseInt(x)).reverse();


const dict = {};



for (let i=0; i<=9; i++ ){
    dict[i] = i.toString();
}

for (let i=10; i<= 30; i++) {
    dict[i] = String.fromCharCode(i+55);
}

let num10 = 0;
for (let i=0 ; i<= numbers.length-1; i++) {

    num10 += (aType ** i) * numbers[i];
}
if (num10 == 0 ){
    console.log(0);
} else {
    const result = [];
    while (num10 != 0) {
        result.push(num10 % bType);
        num10 = parseInt(num10 / bType);
    }

    console.log(result.reverse().join(" "));

}
