// 백준 15649번 N과 M(3)

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
let print = "";

// num은 depth
const tracking = (num) => {
  if (num === m) {
    result.map((el) => (print += `${el} `));
    print += "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    result.push(i);
    tracking(num + 1);
    result.pop();
  }
};

tracking(0);
console.log(print);
