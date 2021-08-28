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
const BFSChecked = new Array(N+1).fill(0);
const BFSResult = [];

function DFS(x) {
    DFSChecked[x] = 1;
    DFSResult.push(x);

    for( let j=0; j<= graph[x].length-1; j++ ) {
        
        if (DFSChecked[graph[x][j]] == 0 ) {
            DFS(graph[x][j]);
        }
    }
}

function BFS(x) {
    let queue = [];
    queue.push(x);
    BFSResult.push(x);
    while (queue.length !== 0) {
        const r = queue.shift();
        BFSChecked[r] = 1;
        for (let i=0; i<= graph[r].length -1; i++ ) {
            if (BFSChecked[graph[r][i]] == 0 ){
                queue.push(graph[r][i]);
                BFSChecked[graph[r][i]] = 1;
                BFSResult.push(graph[r][i]);
            }
        }
        
    }
}

DFS(V);
BFS(V);
// console.log(`${DFSResult.join(" ")}\n${BFSResult.join(" ")}`);
console.log(DFSResult.join(" "));
console.log(BFSResult.join(" "));