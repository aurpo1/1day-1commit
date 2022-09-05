// 백준 16507번 어두운 건 무서워

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [r, c, q] = input.shift().split(" ").map(Number);

const list = [];
for (let i = 0; i < r; i++) {
  list.push(input[i].split(" ").map(Number));
}

let prefix = Array.from(Array(r + 1), () => Array(c + 1).fill(0));
for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c; j++) {
    prefix[i][j] = list[i - 1][j - 1] + prefix[i][j - 1] + prefix[i - 1][j] - prefix[i - 1][j - 1];
  }
}

for (let i = 0; i < q; i++) {
  let [r1, c1, r2, c2] = input[i + r].split(" ").map(Number);
  let amount = (r2 - r1 + 1) * (c2 - c1 + 1);
  let sum = prefix[r2][c2] - prefix[r2][c1 - 1] - prefix[r1 - 1][c2] + prefix[r1 - 1][c1 - 1];
  console.log(parseInt(sum / amount));
}
