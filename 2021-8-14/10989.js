const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(1).map(x =>parseInt(x));


function quickSort(arr,l,r) {

    let left = l;
    let right = r;

    const pivot = arr[Math.floor((l+r)/2)];

    while (left < right) {
        while (true) {

            if (pivot <= arr[left]) {
                break;
            }
            left++;
        }

        while(true) {
            if (pivot >= arr[right]){
                break;
            }
            right--;
        }

        if (left <= right) {
            swap(arr,left,right);
            left++;
            right--;
        }
    }
    if (l < right) {
        quickSort(arr,l,right);
    }

    if (r > left) {
        quickSort(arr,left,r);
    }
}

function swap(arr, id1, id2) {
    const temp = arr[id1];
    arr[id1] = arr[id2];
    arr[id2] = temp;
}

quickSort(numbers,0,numbers.length-1);
console.log(numbers.join("\n"));