// 백준 1697번 숨바꼭질
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const [n, k] = input.split(" ").map(Number);
const max = 100001;

const move = [-1, 1, 2];
let visited = Array(max).fill(0);

const bfs = (x) => {
  let queue = [];
  queue.push(x);
  while (queue.length != 0) {
    let cur = queue.shift();

    if (cur === k) return visited[cur];
    for (let i = 0; i < 3; i++) {
      let next = i === 2 ? cur * move[i] : cur + move[i];
      if (next < 0 || next >= max) continue;
      if (visited[next] === 0) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
};

console.log(bfs(n));
