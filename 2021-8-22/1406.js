// https://www.acmicpc.net/problem/1406

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const initialWord = input[0];
const orders = input.splice(2).map(x => x.split(" "));

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function deleteStr(str,index) {
    return str.substr(0,index) + str.substr(index+1);
}

class Cursor {
    constructor(initialWord){
        this.word = initialWord;
        this.point = initialWord.length;
    }

    left(){
        if (this.point != 0 ) {
            this.point -= 1;
        }
    }

    right() {
        if (this.point != this.word.length) {
            this.point += 1;
        }
    }

    add(x) {
        this.word = insert(this.word,this.point,x);
        this.point += 1;
    }

    remove() {
        if (this.point != 0 ) {
            this.word = deleteStr(this.word,this.point);
            this.point -= 1;
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

console.log(cursor.word);