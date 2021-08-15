const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = input.slice(1).map(x => parseInt(x));


function quickSort(arr, l, r) {
    
    //
    let left = l;
    let right = r;

    // get pivot
    const pivot = arr[Math.floor((l + r ) / 2 )];
    
    // 
    while(left< right) {
        while (arr[left] < pivot) {
            left++; 
        }
        while (arr[right] > pivot) {
            right--;
        }

        if (left < right) {
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