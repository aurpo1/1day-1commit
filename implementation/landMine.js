// 백준 4396번 지뢰 찾기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());

let map = [];
let current = [];
for (let i = 0; i < n; i++) {
  let mapLine = input[i].split("");
  let curLine = input[i + n].split("");
  map.push(mapLine);
  current.push(curLine);
}

const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

let isMine = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (current[i][j] === "x") {
      if (map[i][j] === "*") {
        // 지뢰 밟음
        isMine = true;
      }
      let cnt = 0;
      for (let k = 0; k < 8; k++) {
        if (i + dx[k] < 0 || i + dx[k] >= n || j + dy[k] < 0 || j + dy[k] >= n)
          continue;
        if (map[i + dx[k]][j + dy[k]] === "*") cnt++;
      }
      current[i][j] = cnt;
    }
  }
}

if (isMine) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === "*") {
        current[i][j] = "*";
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  let print = "";
  current[i].map((el) => (print += el));
  console.log(print);
}
