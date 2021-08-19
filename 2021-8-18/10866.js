// https://www.acmicpc.net/problem/10866

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const orders = input.splice(1).map(x => x.trim().split(" "));

class Deque {
    constructor(){
        this._arr = [];
    }

    push_front(x) {
        this._arr.splice(0,0,x);
    }

    push_back(x) {
        this._arr.push(x);
    }

    pop_front() {
        if (this.empty()) {
            return -1;
        }
        const x = this._arr[0];
        this._arr.shift();
        return x;
    }

    pop_back() {
        if (this.empty()){
            return -1;
        }
        return this._arr.pop();
    }

    size() {
        return this._arr.length;
    }

    empty() {
        return this._arr.length > 0 ? 0 : 1;
    }

    front() {
        if (this.empty()) {
            return -1;
        }else {
            return this._arr[0];
        }
    }

    back() {
        if (this.empty()) {
            return -1;
        } else {
            return this._arr[this._arr.length-1];
        }
    }
}

const deque = new Deque();
let result ='';

for (let i=0; i<= orders.length -1; i++ ){

    switch (orders[i][0]) {
        case "push_front":
            deque.push_front(parseInt(orders[i][1]));
            break;
        case "push_back":
            deque.push_back(parseInt(orders[i][1]));
            break;
        case "pop_front":
            // console.log(deque._arr);
            result += deque.pop_front();
            result += "\n";
            // console.log(deque._arr);
            break;
        case "pop_back":
            result += deque.pop_back();
            result += "\n";

            break;
        case "size":
            result += deque.size();
            result += "\n";
            break;
        case "empty":
            result += deque.empty();
            result += "\n";
            break;
        case "front":
            result += deque.front();
            result += "\n";
            break;
        default:
            result += deque.back();
            result += "\n";

    }
}
console.log(result);
