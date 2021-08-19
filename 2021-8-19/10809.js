// https://www.acmicpc.net/problem/10809

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphaIndexDict = {};

for (let i=0; i<= 25; i++) {
    alphaIndexDict[String.fromCharCode(i+97)] = i;
}
const alphaList = new Array(26).fill(-1);


for (let i=0; i<= input.length-1;i++) {
    if (alphaList[alphaIndexDict[input[i]]] == -1 ){
        alphaList[alphaIndexDict[input[i]]] = i;
    }
}

console.log(alphaList.join(" "));
