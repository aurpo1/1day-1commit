// 백준 19583번 싸이버개강총회

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [start, end, sEnd] = input.shift().split(" ");
let check = {};

for (let i = 0; i < input.length; i++) {
  let [chatTime, name] = input[i].split(" ");
  if (name.includes("\r")) name = name.replace(/\r/g, "");

  if (chatTime <= start && !check[name]) {
    check[name] = 0;
  }
  if (end <= chatTime && chatTime <= sEnd && check[name] === 0) {
    check[name] = 1;
  }
}

let cnt = 0;
for (value in check) {
  if (check[value] === 1) {
    cnt++;
  }
}
console.log(cnt);
