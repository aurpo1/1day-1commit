// 백준 15649번 N과 M(4)

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

// num은 depth
const tracking = (start, num) => {
  if (num === m) {
    console.log(...result);
    return;
  }
  for (let i = start; i <= n; i++) {
    result.push(i);
    tracking(i, num + 1);
    result.pop();
  }
};

tracking(1, 0);
