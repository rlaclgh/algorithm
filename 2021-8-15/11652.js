const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.splice(1).map(x => x.trim());

const dict = {};
for (let i=0; i<=numbers.length-1;i++ ){
    dict[numbers[i]] = (dict[numbers[i]] || 0 )+ 1;
}

entries = Object.entries(dict);
// entries.sort( (a,b) => {
//     if (a[1]!=b[1]) {
//         return -(a[1] - b[1]);
//     } else {
//         console.log(BigInt(a[0]) - BigInt(b[0])<0);
//         return BigInt(a[0]) - BigInt(b[0]) > 0 ? 0 : 1;
//     }
// })
let maxCount = 0;
let minNumber = 2**62;
for (let i=0; i<= entries.length-1; i++ ) {

    if (maxCount < entries[i][1]) {
        maxCount = entries[i][1];
        minNumber = entries[i][0];
    } else if (maxCount == entries[i][1] & BigInt(minNumber) > BigInt(entries[i][0])) {
        minNumber = entries[i][0];
    }
}

console.log(minNumber);
