// 백준 15649번 N과 M(6)

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);
list.sort((a, b) => a - b);
list.unshift(0);

let result = [];
let visited = Array(n + 1).fill(false);

const tracking = (start, num) => {
  if (num === m) {
    console.log(...result);
  }
  for (let i = start; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(list[i]);
      tracking(i, num + 1);

      visited[i] = false;
      result.pop();
    }
  }
};

tracking(1, 0);
