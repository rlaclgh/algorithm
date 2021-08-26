// https://www.acmicpc.net/problem/1212

const input = require("fs").readFileSync("/dev/stdin").toString().trim();



const result = [];

for (let i=0; i<= input.length -1; i++ ) {

    let num = input[input.length-1-i];
    let res = '';

    res += num%2;
    num = parseInt(num/2);
    res += num%2;
    num = parseInt(num/2);
    res += num%2;
    num = parseInt(num/2);

    result.push(res.split("").reverse().join(""));
}

const joinedResult = result.reverse().join("");
if (joinedResult[0] == "0" & joinedResult[1] == "0") {
    console.log(joinedResult.slice(2));
} else if (joinedResult[0] == "0") {
    console.log(joinedResult.slice(1));
} else {
    console.log(joinedResult);
}

