//https://www.acmicpc.net/problem/10799

const input = require('fs').{readFileSync("/dev/stdin").toString().trim().split("");}


class Stack {
    constructor() {
        this._arr = [];
        this.totalCount = 0;
        this.sticks = 0;
    }

    addStick() {
        this.sticks += 1; 
    }

    lazer() {
        this.totalCount += this.sticks;
    }

    endStick() {
        this.totalCount +=1;
        this.sticks -= 1;
    }
}

const stack = new Stack();

for (let i=0; i<= input.length -1; i++ ) {
    switch(input[i]) {
        case "(":
            if (input[i+1] == ")") {
                // lazer
                stack.lazer();
            } else {
                // addStick
                stack.addStick();
            }

            break;
        default:
            if (input[i-1] == ")") {
                // endStick
                stack.endStick();
            }
    }
}

console.log(stack.totalCount);
