// 백준 4358번 생태학

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let tree = {};

for (let i = 0; i < input.length; i++) {
  if (input[i].includes("\r")) input[i] = input[i].replace(/\r/g, "");
  if (!tree[input[i]]) tree[input[i]] = 1;
  else tree[input[i]] += 1;
}

const treeKey = Object.keys(tree);
let result = {};
treeKey.sort().map((key) => (result[key] = tree[key]));

const total = Object.values(tree).reduce((a, b) => a + b);
treeKey.map((key) => (result[key] = ((result[key] / total) * 100).toFixed(4)));

let print = "";
treeKey.map((key) => (print += `${key} ${result[key]}\n`));
console.log(print);
