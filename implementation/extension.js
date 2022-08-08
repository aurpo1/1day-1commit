// 백준 20291번 파일 정리

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());

const result = {};

for (let i = 0; i < n; i++) {
  let extension = input[i].split(".")[1];
  extension = extension.replace(/\r/g, "");
  result[extension] ? result[extension]++ : (result[extension] = 1);
}

let print = {};

Object.keys(result)
  .sort()
  .forEach(function (key) {
    print[key] = result[key];
  });

let a = "";
for (el in print) {
  a += `${el} ${print[el]}\n`;
}
console.log(a);
