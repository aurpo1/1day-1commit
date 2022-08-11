// 백준 5568번 카드 놓기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);
const n = input.shift();
const k = input.shift();

let numbers = new Set();
let visited = Array(n).fill(false);

let temp = [];

const makeNumber = (num) => {
  if (num === k) {
    numbers.add(temp.join(""));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      temp.push(input[i]);
      makeNumber(num + 1);

      visited[i] = false;
      temp.pop();
    }
  }
};

makeNumber(0);
console.log(numbers.size);
