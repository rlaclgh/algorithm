// https://www.acmicpc.net/problem/11653

let num = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let i = 2;
const result = [];

if (num != 1 ) {

    while( num != 1) {

        if (num % i == 0 ){
            num  = num / i;
            result.push(i);
        } else {
            i ++;
        }
        
    }

    console.log(result.join("\n"));

}
