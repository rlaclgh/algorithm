const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = pars2eInt(input[0]);
const numbers = input.slice(1).map(x => parseInt(x));

numbers.sort();


for (i=0; i<= numbers.length-1; i++ ){
    console.log(numbers[i]);
}