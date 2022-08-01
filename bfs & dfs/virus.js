// 백준 2606번 바이러스

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const comNum = Number(input.shift());
const n = Number(input.shift());

let graph = Array.from(Array(comNum + 1), () => new Array());

for (let i = 0; i < n; i++) {
  let node = input[i].split(" ").map(Number);
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}

let virusCom = 0;
const dfs = (graph, v, visited) => {
  visited[v] = true;
  virusCom++;
  for (i of graph[v]) {
    if (!visited[i]) dfs(graph, i, visited);
  }
  return virusCom - 1;
};

let visited = Array(comNum + 1).fill(false);
console.log(dfs(graph, 1, visited));
