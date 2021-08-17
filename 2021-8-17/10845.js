//https://www.acmicpc.net/problem/10845

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const num = parseInt(input[0].trim());
const orders = input.splice(1).map(x => x.trim().split(" "));


class Queue {
    constructor() {
        this._arr = [];
    }

    push(item) {
        this._arr.push(item);
    }

    pop() {
        if (this.empty() == 1) {
            return -1;
        } else {
            return this._arr.shift();
        }
    }

    empty() {

        if (this._arr.length >0 ) {
            return 0;
        } else {
            return 1;
        }
    }

    size() {
        return this._arr.length;
    }

    front() {
        if (this.empty() == 1 ) {
            return -1;
        } else  {
            return this._arr[0];
        }
    }

    back() {
        if (this.empty() == 1) {
            return -1;
        } else {
            return this._arr[this._arr.length -1];
        }
    }
}


const queue = new Queue();

let result ='';


for (let i=0; i <= num-1; i++ ) {

    switch (orders[i][0]) {
        case 'push':
            queue.push(orders[i][1]);
            break;
        case 'pop':
            result += `${queue.pop()}\n`;
            break;
        case 'size':
            result += `${queue.size()}\n`;
            break;
        case 'empty':
            result += `${queue.empty()}\n`;
            break;
        case 'front':
            result += `${queue.front()}\n`;
            break
        default:
            result += `${queue.back()}\n`;
    }
}

console.log(result);