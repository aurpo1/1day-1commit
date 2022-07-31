// v는 현재 노드 위치(인덱스)
const dfs = (graph, v, visited) => {
  // 현재 노드 방문 처리
  visited[v] = true;
  console.log(v);
  // 현재 노드와 인접한 다른 노드들을 재귀적으로 방문
  for (i of graph[v]) {
    // 방문한 적 없는 노드
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
};

// 모든 배열의 첫 인덱스는 '0'이기 때문에 없는 것처럼 처리
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array(9).fill(false);

dfs(graph, 1, visited);
