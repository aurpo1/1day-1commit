// 백준 14501번 퇴사

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());
const list = [];

for (let i = 0; i < n; i++) {
  list.push(input[i].split(" ").map(Number));
}

let result = Array(n + 1).fill(0);

for (let i = n - 1; i >= 0; i--) {
  if (list[i][0] + i > n) {
    result[i] = result[i + 1];
  } else {
    result[i] = Math.max(result[i + 1], list[i][1] + result[i + list[i][0]]);
  }
}

console.log(result[0]);
