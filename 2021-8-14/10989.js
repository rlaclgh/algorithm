const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(1).map(x =>parseInt(x));


function quickSort(arr,l,r) {

    let left = l;
    let right = r;

    const pivot = arr[Math.floor((l+r)/2)];

    while (left < right) {
        
    }
}