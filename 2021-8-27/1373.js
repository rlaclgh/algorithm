// https://www.acmicpc.net/problem/1373

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const dict = {};

dict["0"] = "0";
dict["1"] = "1";
dict["10"] = "2";
dict["11"] = "3";
dict["100"] = "4";
dict["101"] = "5";
dict["110"] = "6";
dict["111"] = "7";

// const reversedWord = input.split("").reverse().join("");

const result = [];

const len = input.length;

for (let i=0; i<= len -1; i+= 3) {

    const a = Math.max(len-3-i,0);
    result.push(dict[parseInt(input.slice(a,len-i))]);
}

console.log(result.reverse().join(""));

