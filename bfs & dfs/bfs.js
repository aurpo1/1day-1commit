const bfs = (graph, start, visited) => {
  let queue = [];
  queue.push(start);
  // 현재 노드 방문 처리
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.length != 0) {
    // 큐에서 원소 뽑아서 출력 (선입선출)
    let v = queue.shift();
    console.log(v);
    // 아직 방문하지 않은 인접 원소들 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
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

bfs(graph, 1, visited);
