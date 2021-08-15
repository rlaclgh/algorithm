const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(1).map(x => [x.split(" ")[0],parseInt(x.split(" ")[1]),parseInt(x.split(" ")[2]),parseInt(x.split(" ")[3])]);


// 국어 1 내림
// 영어 2 오름
// 수학 3 내림
// 이름 4 오름 

function quickSort(arr,l,r) {

    let left = l;
    let right = r;

    const pivot = arr[Math.floor((l+r)/2)];

    while (left < right) {

        // left
        while ( true ) {
            // 국어 내림차순
            if (pivot[1] > arr[left][1]) {
                break;
            } else if (pivot[1] == arr[left][1]) {
                // 영어 오름차순
                if (pivot[2] < arr[left][2]) {
                    break;
                } else if (pivot[2] == arr[left][2]) {
                    // 수학 내림차순
                    if (pivot[3] > arr[left][3]) {
                        break;
                    } else if (pivot[3] == arr[left][3]) {
                        // 이름 오름차순
                        if (pivot[0].toString() <= arr[left][0].toString()) {
                            break;
                        }
                    }
                }
            }
            left++;
        }

        while ( true ) {
            // 국어 내림차순
            if (pivot[1] < arr[right][1]) {
                break;
            } else if (pivot[1] == arr[right][1]) {
                // 영어 오름차순
                if (pivot[2] > arr[right][2]) {
                    break;
                } else if (pivot[2] == arr[right][2]) {
                    // 수학 내림차순
                    if (pivot[3] < arr[right][3]) {
                        break;
                    } else if (pivot[3] == arr[right][3]) {
                        // 이름 오름차순
                        if (pivot[0].toString() >= arr[right][0].toString()) {
                            break;
                        }
                    }
                }
            }
            right--;
        }
        if (left <= right ) {
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
console.log(numbers.map(x => x[0]).join("\n"));