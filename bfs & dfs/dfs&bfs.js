// 백준 1260번 DFS 와 BFS

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const nmv = input.shift().split(" ").map(Number);

let graph = Array.from(Array(nmv[0] + 1), () => new Array());

for (let i = 1; i <= nmv[1]; i++) {
  let node = input.shift().split(" ").map(Number);
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}
graph.map((el) => el.sort((a, b) => a - b));

let dfsAns = [];
let bfsAns = [];

const dfs = (graph, v, visited, ans) => {
  // 현재 노드 방문 처리
  visited[v] = true;
  ans.push(v);
  // 현재 노드와 인접한 다른 노드들을 재귀적으로 방문
  for (i of graph[v]) {
    // 방문한 적 없는 노드
    if (!visited[i]) {
      dfs(graph, i, visited, ans);
    }
  }
  return ans;
};

const bfs = (graph, start, visited, ans) => {
  let queue = [];
  queue.push(start);
  // 현재 노드 방문 처리
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.length != 0) {
    // 큐에서 원소 뽑아서 출력 (선입선출)
    let v = queue.shift();
    ans.push(v);
    // 아직 방문하지 않은 인접 원소들 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
  return ans;
};

let visited = Array(9).fill(false);
let a = dfs(graph, nmv[2], visited, dfsAns);
visited.fill(false);
let b = bfs(graph, nmv[2], visited, bfsAns);

console.log(...a);
console.log(...b);
