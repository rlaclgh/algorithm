// https://www.acmicpc.net/problem/9613

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input.splice(1).map(x => x.split(" ").splice(1).map(y => parseInt(y)));

function gcd(a,b) {
    if (Math.min(a,b) == 0 ) {
        return Math.max(a,b);
    }

    return gcd(Math.max(a,b) % Math.min(a,b) , Math.min(a,b));
}

let result = "";

for(let i=0; i<= numbers.length-1; i++ ){
    
    let sum = 0; 

    for(let j=0; j<= numbers[i].length -1; j++) {

        for(let k=j+1; k<= numbers[i].length -1; k++ ){

            sum += gcd(numbers[i][j],numbers[i][k]);
        }
    }
    result += `${sum}\n`;
}

console.log(result);