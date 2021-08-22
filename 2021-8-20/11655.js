// https://www.acmicpc.net/problem/11655

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


// a -> 97 , z-> 122
// " " -> 32
// A -> 65 , Z -> 90
// 0 -> 48 , 9 -> 57


let result = '';

for (let i=0; i<= input[0].length -1; i++) {
    const code = input[0][i].charCodeAt();
    if (code >= 97 && code <= 122 ) {
        const newCode = code + 13;
        result += newCode > 122 ?  String.fromCharCode(newCode - 122 + 97-1) : String.fromCharCode(newCode);

    } else if ( code >= 65 && code <= 90 ) {
        const newCode = code + 13;
        result += newCode >90 ?  String.fromCharCode(newCode - 90 + 65 -1) : String.fromCharCode(newCode);

    } else {
        result += input[0][i];
    }
}

console.log(result);