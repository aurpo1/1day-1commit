// 백준 1541번 잃어버린 괄호

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let splitMinus = input.split("-");

for (let i = 0; i < splitMinus.length; i++) {
  if (splitMinus[i].includes("+")) {
    let splitPlus = splitMinus[i].split("+").map(Number);
    splitMinus[i] = splitPlus.reduce((a, b) => a + b);
  }
}

console.log(splitMinus.map(Number).reduce((a, b) => a - b));
