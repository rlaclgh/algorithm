//https://www.acmicpc.net/problem/9012

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const num = parseInt(input[0].trim());
const brakets = input.splice(1).map(x => x.trim().split(""));


class Stack {
    constructor() {
        this._arr = []; 
    }

    push() {
        this._arr.push("(");
    }

    pop() {
        return this._arr.pop();
    }

    check() {
        return this._arr.length;
    }
}


for (let i=0; i<= num-1; i++ ){
    let stack = new Stack();
    let flag = true;

    for (j=0; j<= brakets[i].length-1; j++ ){

        switch (brakets[i][j]) {
            case '(':
                stack.push();
                break;
            default:
                if (!stack.pop()) {
                    flag = false;
                    break;
                } 
        }
    }

    if (stack.check()) {
        flag = false;
    }

    if (flag) {
        console.log("YES");
    } else {
        console.log("NO");
    }


}
