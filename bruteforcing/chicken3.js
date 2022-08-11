// 백준 16439번 치킨치킨치킨

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const favor = [];

for (let i = 0; i < n; i++) {
  favor.push(input[i].split(" ").map(Number));
}

let visited = Array(m).fill(false);
let combination = [];
let result = 0;

// 3가지의 치킨 조합 만들기
const makeCombi = (start, num) => {
  if (num === 3) {
    let temp = makeSum(combination[0], combination[1], combination[2]);
    if (temp > result) result = temp;
    return;
  }
  for (let i = start; i < m; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combination.push(i);
      makeCombi(i, num + 1);

      visited[i] = false;
      combination.pop();
    }
  }
};

const makeSum = (a, b, c) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.max(favor[i][a], favor[i][b], favor[i][c]);
  }
  return sum;
};

makeCombi(0, 0);
console.log(result);
