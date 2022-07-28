// 올바른 배열

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();
input.sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < n; i++) {
  let tempCount = 0;
  for (let j = i + 1; j < i + 5; j++) {
    if (input[j] - input[i] < 5) {
      tempCount++;
    }
    if (tempCount > count) {
      count = tempCount;
    }
  }
}

console.log(4 - count);
