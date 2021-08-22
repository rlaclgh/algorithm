// https://www.acmicpc.net/problem/11005

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(x => parseInt(x));

let num = input[0];
const divider = input[1];

const dict = {};

for (i=0 ; i<=9; i++ ) {
    dict[i] = `${i}`;
}
for (i=0; i<=26;i++) {
    dict[i+10] = String.fromCharCode(i+65);
}

let result = [];

while (num >= divider) {
    result.push(dict[num % divider]);
    num = parseInt(num /divider);
}
result.push(dict[num]);

console.log(result.reverse().join(""));


