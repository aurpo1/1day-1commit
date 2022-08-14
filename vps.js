// 백준 9012번 괄호

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());

for (let i = 0; i < n; i++) {
  let test = input[i].split("");
  if (test.includes("\r")) test.pop();

  let stack = [];
  for (let j = 0; j < test.length; j++) {
    if (test[j] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        stack.push(")");
        break;
      } else {
        stack.pop();
      }
    }
  }
  console.log(stack.length === 0 ? "YES" : "NO");
}
