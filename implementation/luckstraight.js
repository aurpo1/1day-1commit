// 백준 18406번 럭키 스트레이트

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");

let left = 0;
let right = 0;

input.map((el, i) => {
  if (i < input.length / 2) {
    left += Number(el);
  } else {
    right += Number(el);
  }
});

console.log(left === right ? "LUCKY" : "READY");
