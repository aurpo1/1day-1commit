// 백준 13410번 거꾸로 구구단

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const [n, k] = input.split(" ").map(Number);
let list = [];

for (let i = 1; i <= k; i++) {
  let temp = String(i * n)
    .split("")
    .reverse();
  list.push(Number(temp.join("")));
}
console.log(Math.max(...list));
