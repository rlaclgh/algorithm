const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
const numbers = input.slice(1).map(x => parseInt(x));


function quickSort(arr, start, end) {
    const part = partition(arr,start, end);

    if (start < part -1 ) {
        quickSort(arr,start,part -1); 
    }

    if (part < end ) {
        quickSort(arr,part,end);
    }

}

function partition(arr, start, end) {
    const pivot = arr[Math.floor((start+ end) /2)];
    while (start<= end) {
        while (arr[start]< pivot) {
            start++;
        }
        while (arr[end]> pivot) {
            end--;
        }

        if( start <= end ){
            swap(arr,start,end);
            start++;
            end--;
        }
    }
    return start;
}

function swap(arr,start,end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

// quickSort(numbers,0,numbers.length-1);
numbers.sort((a,b) => a-b);
console.log(numbers.join("\n"));