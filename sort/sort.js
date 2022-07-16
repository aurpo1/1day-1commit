// 2751

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

const n = input[0];
const arr = input.splice(1).sort();

console.log(arr.join("\n"));
