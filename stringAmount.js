// 백준 11478번 서로 다른 부분 문자열의 개수
const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const n = line.length;
  let string = new Set();

  const makeString = (len) => {
    for (let i = 0; i < n; i++) {
      let temp = input.slice(i, len + i).join("");
      string.add(temp);
    }
  };

  for (let i = 1; i <= n; i++) {
    makeString(i);
  }

  console.log(string.size);

  rl.close();
});

///

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");
const n = input.length;

let string = {};

const makeString = (len) => {
  for (let i = 0; i < n; i++) {
    let temp = input.slice(i, len + i).join("");
    string[temp] = 1;
  }
};

for (let i = 1; i <= n; i++) {
  makeString(i);
}

console.log(Object.keys(string).length);
