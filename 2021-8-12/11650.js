const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(1).map(x => x.split(" ").map(x => parseInt(x)));

function quickSort(arr, l, r) {

    let left = l;
    let right = r;

    // get pivot

    const pivot = arr[Math.floor((l+r) / 2)];

    while(left < right) {
        while (true) {
            if (pivot[0] < arr[left][0]) {
                break;
            } else if (pivot[0] == arr[left][0]) {
                if (pivot[1] <= arr[left][1]) {
                    break;
                }
            }
            left++;
        }

        while(true) {
            if (pivot[0] > arr[right][0]) {
                break;
            } else if (pivot[0] == arr[right][0]) {
                if (pivot[1] >= arr[right][1]) {
                    break;
                }
            }
            right--;
        }

        if (left<= right) {
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
console.log(numbers.map(x => x.join(" ")).join("\n"));