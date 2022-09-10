// 백준 11399번 ATM

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());
const time = input.shift().split(" ").map(Number);

time.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += time[i] * (n - i);
}

console.log(sum);
