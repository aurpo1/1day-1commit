// 백준 1244번 스위치 켜고 끄기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift()); // 스위치 개수
let list = input.shift().split(" ").map(Number); // 스위치 상태
const num = Number(input.shift()); // 학생 수

for (let i = 0; i < num; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  if (x === 1) {
    // 남학생
    for (let j = 0; j < n; j++) {
      if ((j + 1) % y === 0) list[j] = list[j] === 1 ? 0 : 1;
    }
  } else {
    // 여학생
    list[y - 1] = list[y - 1] === 1 ? 0 : 1;
    for (let j = 1; j <= n / 2; j++) {
      if (y - j <= 0 || y + j > n || list[y - j - 1] !== list[y + j - 1]) break;
      list[y - j - 1] = list[y - j - 1] === 1 ? 0 : 1;
      list[y + j - 1] = list[y + j - 1] === 1 ? 0 : 1;
    }
  }
}

let result = "";
if (n > 20) {
  for (let i = 0; i < n; i++) {
    if (i % 20 === 0 && i !== 0) result += `\n${list[i]} `;
    else result += `${list[i]} `;
  }
} else {
  for (let i = 0; i < n; i++) {
    result += `${list[i]} `;
  }
}
console.log(result);
