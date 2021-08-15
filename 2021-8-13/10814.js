const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(1).map((x,index) => new Array(parseInt(x.split(" ")[0]), x.split(" ")[1] , index));


function quickSort(arr,l,r) {
    let left = l;
    let right = r;

    // get pivot

    const pivot = arr[Math.floor((l+r)/2)];

    while (left < right) {
        while (true) {
            if (pivot[0] < arr[left][0]) {
                break;
            } else if (pivot[0] == arr[left][0]) {
                if (pivot[2] <= arr[left][2]){
                    break;
                }
            }
            left++;
        }

        while(true) {
            if (pivot[0] > arr[right][0]) {
                break;
            } else if (pivot[0] == arr[right][0]) {
                if (pivot[2] >= arr[right][2]) {
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

function swap(arr,id1,id2){
    const temp = arr[id1];
    arr[id1] = arr[id2];
    arr[id2] = temp;
}

quickSort(numbers,0,numbers.length-1);
console.log(numbers.map(x => x.splice(0,2).join(" ")).join("\n"));
