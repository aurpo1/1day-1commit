// 백준 2512번 예산

const fs = require("fs");
const input = fs.readFileSync("input1.txt").toString().trim().split("\n");

const n = input.shift();
const req = input.shift().split(" ").map(Number);
const budget = input.shift();

let result = Math.max(...req);
let left = Math.min(...req);
let right = Math.max(...req);

if (left * n > budget) {
  result = Math.floor(budget / n);
} else {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (req[i] <= mid) {
        sum += req[i];
      } else {
        sum += mid;
      }
    }
    if (sum <= budget) {
      left = mid + 1;
    } else {
      right = mid - 1;
      result = right;
    }
  }
}

console.log(result);
