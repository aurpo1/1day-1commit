// 백준 15649번 N과 M(2)

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = input.shift();
const m = input.shift();

let result = [];
let visited = Array(n + 1).fill(false);

const tracking = (start, num) => {
  if (num === m) {
    console.log(...result);
    return;
  }
  for (let i = start; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      tracking(i, num + 1);

      // back-tracking 될 때 초기화 시켜주기
      visited[i] = false;
      result.pop();
    }
  }
};

tracking(1, 0);
