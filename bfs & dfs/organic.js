// 백준 1012번 유기농 배추

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const t = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let test = 0; test < t; test++) {
  let [m, n, k] = input.shift().split(" ").map(Number);
  let map = Array.from(Array(m), () => Array(n).fill(0));
  let visited = Array.from(Array(m), () => Array(n).fill(false));

  for (let i = 0; i < k; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    map[x][y] = 1;
  }

  const dfs = (x, y) => {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + x;
      let ny = dy[i] + y;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      if (!map[nx][ny] || visited[nx][ny]) continue;
      dfs(nx, ny);
    }
  };

  let cnt = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] && !visited[i][j]) {
        cnt++;
        dfs(i, j);
      }
    }
  }

  console.log(cnt);
}
