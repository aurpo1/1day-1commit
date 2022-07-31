// 백준 2667번 단지 번호 붙이기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());
const apartment = [];

for (let i = 0; i < n; i++) {
  apartment.push(input[i].split("").map(Number));
}

const dfs = (x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;
  if (apartment[x][y] >= 1) {
    apartment[x][y] = -1; // 방문 처리
    let result = 1;
    result += dfs(x - 1, y);
    result += dfs(x + 1, y);
    result += dfs(x, y + 1);
    result += dfs(x, y - 1);
    return result;
  }
  return 0;
};

let ans = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j);
    if (current > 0) ans.push(current);
  }
}

ans.sort((a, b) => a - b);
console.log(ans.length + "\n" + ans.join("\n"));
