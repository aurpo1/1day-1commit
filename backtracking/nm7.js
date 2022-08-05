// 백준 15649번 N과 M(7)

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);
list.sort((a, b) => a - b);
list.unshift(0);

let result = [];
let print = "";

const tracking = (num) => {
  if (num === m) {
    result.map((el) => (print += `${el} `));
    print += "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    result.push(list[i]);
    tracking(num + 1);
    result.pop();
  }
};

tracking(0);
console.log(print);
