// https://www.acmicpc.net/problem/1676

let num = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let result = 0;

for (let i=1; i<=num; i++) {

    let temp = i ;

    while (temp % 5 == 0 ) {
        result += 1;
        temp = temp /5;
    }
}

console.log(result);