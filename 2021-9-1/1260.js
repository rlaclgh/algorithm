// https://www.acmicpc.net/problem/1260

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
const V = parseInt(input[0].split(" ")[2]);

const graph = Array.from(Array(N+1), () => new Array());

for (let i=1; i<= input.length-1; i++ ) {

    const x = parseInt(input[i].split(" ")[0]);
    const y = parseInt(input[i].split(" ")[1]);

    graph[x].push(y);
    graph[y].push(x);
}

for (let i=1; i<= N; i++ ){
    graph[i].sort();    
}

const DFSChecked = new Array(N+1).fill(0);
const DFSResult = [];

// function DFS(x){
//     DFSResult.push(x);
//     DFSChecked[x] = 1;

//     for (let i=0; i<= graph[x].length -1; i++ ) {
//         if (DFSChecked[graph[x][i]] == 0 ) {
//             DFS(graph[x][i]);
//         }
//     }
// }
// function DFS(x) {
//     const stack = [];
//     stack.push(x);
//     DFSChecked[x] = 1;

//     while ( stack.length > 0 ){
//         const r = stack.pop();
//         for (let i=graph[r].length -1; i>= 0; i-- ){
//             if(DFSChecked[graph[r][i]] == 0 ){
//                 DFSChecked[graph[r][i]] = 1;
//                 stack.push(graph[r][i]);
//             }
//         }
//         DFSResult.push(r);
//     }
// }

function DFS(x) {
    DFSResult.push(x);
    DFSChecked[x] = 1;

    for (let i=0; i <= graph[x].length -1; i++ ) {
        if (DFSChecked[graph[x][i]] == 0 ) {
            DFS(graph[x][i]);
        }
    }
}
DFS(V);
console.log(DFSResult.join(" "));
console.log(graph);

const BFSResult = [];
const BFSChecked = new Array(N+1).fill(0);

function BFS(x) {

    const queue = [];
    queue.push(x);
    BFSChecked[x] = 1;
    while ( queue.length > 0 ) {
        const r = queue.shift();
        for(let i=0; i<= graph[r].length -1; i++) {
            if (BFSChecked[graph[r][i]] == 0 ) {
                BFSChecked[graph[r][i]] = 1;
                queue.push(graph[r][i]);
            }
        }
        BFSResult.push(r);
    }
}
BFS(V);
console.log(BFSResult.join(" "));
