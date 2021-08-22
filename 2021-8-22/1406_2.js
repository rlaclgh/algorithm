// https://www.acmicpc.net/problem/1406

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const initialWord = input[0];
const orders = input.splice(2).map(x => x.split(" "));

class Cursor {
    constructor(initialWord){
        this._left = initialWord.split("");
        this._right = [];
    }

    left(){
        if (this._left.length) {
            this._right.push(this._left.pop());
        }
    }

    right() {
        if (this._right.length) {
            this._left.push(this._right.pop());
        }
    }

    add(x) {
        this._left.push(x);
    }

    remove() {
        if (this._left.length) {
            this._left.pop();
        }
    }
}

const cursor = new Cursor(initialWord);

for(let i=0; i<= orders.length-1; i++ ) {

    switch (orders[i][0]) {
        case "P" :
            cursor.add(orders[i][1]);
            break;
        case "L":
            cursor.left();
            break;
        case "D":
            cursor.right();
            break;
        default:
            cursor.remove();
    }
}

console.log(cursor._left.join("") + cursor._right.reverse().join(""));

