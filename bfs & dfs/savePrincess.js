// 백준 17836번 공주님을 구해라!

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [n, m, t] = input.shift().split(" ").map(Number);
let map = [];
let gram;

for (let i = 0; i < n; i++) {
  let temp = input[i].split(" ").map(Number);
  // 그람의 위치
  if (temp.includes(2)) {
    gram = [i, temp.indexOf(2)];
    temp[temp.indexOf(2)] = 0;
  }
  map.push(temp);
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let visited = Array.from(Array(n + 1), () => new Array());
let yesGram = 10001; // 그람이 있는 경우의 거리

const bfs = (x, y) => {
  let queue = [];
  queue.push([x, y]);
  while (queue.length !== 0) {
    let [x, y] = queue.shift();
    visited[x][y] = true;

    if (x === gram[0] && y === gram[1]) {
      yesGram = map[x][y] + (n - 1 - x) + (m - 1 - y);
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (!visited[nx][ny] && map[nx][ny] === 1) continue;
      if (!visited[nx][ny] && map[nx][ny] === 0) {
        map[nx][ny] += map[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return map[n - 1][m - 1];
};

// 그람이 없는 경우의 거리
let noGram = bfs(0, 0);
// 그람이 없는 경우에 끝까지 가지 못한 경우
if (noGram === 0) {
  noGram = 10001;
}

const result = Math.min(noGram, yesGram);
console.log(result <= t ? result : "Fail");
