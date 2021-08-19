// https://www.acmicpc.net/problem/10820

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


// a -> 97 , z-> 122
// " " -> 32
// A -> 65 , Z -> 90
// 0 -> 48 , 9 -> 57

let numsList = [];

for (let i=0; i<= input.length-2; i++ ) {
    const nums = new Array(4).fill(0);
    for(let j=0; j<= input[i].length -1; j++ ) {
        const code = input[i][j].charCodeAt();
        if (code == 32 ) {
            nums[3] += 1;
        } else if (code >= 97 && code <= 122) {
            nums[0] += 1;
        } else if (code >= 48 && code <= 57) {
            nums[2] += 1;
        } else {
            nums[1] += 1;
        }
    }
    numsList.push(nums.join(" "));
}

console.log(numsList.join("\n"));