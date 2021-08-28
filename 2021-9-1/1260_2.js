// https://www.acmicpc.net/problem/1260

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(x => parseInt(x));


const graph = Array.from(Array(N+1), () => Array(N+1).fill(0));


for (let i=1; i < input.length; i++ ) {

    const [x, y] = input[i].split(" ").map(x => parseInt(x));
    graph[x][y] = 1;
    graph[y][x] = 1;
}


const DFSChecked = new Array(N+1).fill(0);
const DFSResult = [];
const BFSChecked = new Array(N+1).fill(0);
const BFSResult = [];

function DFS(x) {
    DFSChecked[x] = 1;
    DFSResult.push(x);

    for (let i=1; i<= N; i++ ){
        if( DFSChecked[i] == 0 && graph[x][i] == 1 ) {
            DFS(i);
        }
    }
}

function BFS(x) {
    let queue = [];
    queue.push(x);
    BFSResult.push(x);
    BFSChecked[x] =1;
    while (queue.length !== 0) {
        const r = queue.shift();
        for (let i=1; i<= N; i++ ) {
            if (BFSChecked[i] == 0 && graph[r][i] == 1 ) {
                queue.push(i);
                BFSChecked[i] =1;
                BFSResult.push(i);
            }
        }
    }
}

DFS(V);
BFS(V);
// console.log(`${DFSResult.join(" ")}\n${BFSResult.join(" ")}`);
console.log(DFSResult.join(" "));
console.log(BFSResult.join(" "));