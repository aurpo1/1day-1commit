// 백준 17413번 단어 뒤집기 2
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");

let s = "";
let temp = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    let j = i;
    while (input[j] !== ">") {
      s += input[j];
      j++;
    }
    s += ">";
    i = j;
  } else {
    if (input[i] === " ") {
      s += input[i];
      continue;
    }
    temp.push(input[i]);
    if (
      input[i + 1] === "<" ||
      input[i + 1] === " " ||
      i === input.length - 1
    ) {
      s += temp.reverse().join("");
      temp = [];
    }
  }
}

console.log(s);
