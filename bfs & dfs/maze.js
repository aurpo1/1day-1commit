// 백준 2178번 미로 탐색

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const nm = input.shift().split(" ").map(Number);
const n = nm[0];
const m = nm[1];
const maze = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (input.length !== 0) {
  let temp = input.shift().split("");
  if (temp.includes("\r")) temp.pop();
  maze.push(temp.map(Number));
}

const bfs = (x, y) => {
  let queue = [];
  queue.push([x, y]);
  while (queue.length !== 0) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maze[nx][ny] === 0) continue;
      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return maze[n - 1][m - 1];
};

console.log(bfs(0, 0));
