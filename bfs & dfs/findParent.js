// 백준 11725번 트리의 부모 찾기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());
let graph = Array.from(Array(n + 1), () => new Array());

for (let i = 0; i < input.length; i++) {
  let node = input[i].split(" ").map(Number);
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}

let ans = Array(n + 1).fill(0);
const dfs = (graph, v, visited, ans) => {
  visited[v] = true;
  for (i of graph[v]) {
    if (!visited[i]) {
      ans[i] = v;
      dfs(graph, i, visited, ans);
    }
  }
  return ans;
};

let visited = Array(n + 1).fill(false);
let result = dfs(graph, 1, visited, ans);
result = result.slice(2);

let print = "";
result.map((el) => (print += `${el}\n`));
console.log(print);
