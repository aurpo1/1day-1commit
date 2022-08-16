// 백준 2961번 도영이가 만든 맛있는 음식

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());
const flavor = [];
for (let i = 0; i < n; i++) {
  flavor.push(input[i].split(" ").map(Number));
}

let combi = [];
let diff = Math.abs(flavor[0][0] - flavor[0][1]);
let visited = Array(n).fill(false);

const makeCombi = (start, num, cnt) => {
  if (num === cnt) {
    let sour = 1;
    let bitter = 0;
    combi.map((el) => {
      sour *= flavor[el][0];
      bitter += flavor[el][1];
    });
    if (diff > Math.abs(sour - bitter)) diff = Math.abs(sour - bitter);
    return;
  }
  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combi.push(i);
      makeCombi(i, num + 1, cnt);

      visited[i] = false;
      combi.pop();
    }
  }
};

for (let i = 1; i <= n; i++) {
  makeCombi(0, 0, i);
}
console.log(diff);
