//https://www.acmicpc.net/problem/10828

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const num = parseInt(input[0].trim());
const orders = input.splice(1).map(x => x.trim().split(" "));

class Stack {
    constructor() {
        this._arr = [];
    }

    push(item) {
        this._arr.push(item);
    }

    pop(){

        if (this.empty() == 1) {
            return -1;
        } else {
            return this._arr.pop();
        }
    
    }

    size() {
        return this._arr.length;
    }
    
    empty() {

        let isEmpty;

        if (this._arr.length > 0 ) {
            isEmpty = 0;
        } else {
            isEmpty = 1;
        }
        return isEmpty;
    }
    top() {
        if (this.empty() == 1) {
            return -1;
        } else {
            return this._arr[this._arr.length -1];
        }
    }
}

const stack = new Stack();

let result ='';


for (let i=0; i <= num-1; i++ ) {

    switch (orders[i][0]) {
        case 'push':
            stack.push(orders[i][1]);
            break;
        case 'top':
            result += `${stack.top()}\n`;
            break;
        case 'size':
            result += `${stack.size()}\n`;
            break;
        case 'empty':
            result += `${stack.empty()}\n`;
            break;
        default:
            result += `${stack.pop()}\n`;
    }
}

console.log(result);