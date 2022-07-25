// 백준 덩치

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());
const people = input.map((el) => el.split(" "));

let result = Array(n).fill(1, 0);

for (let i = 0; i < people.length; i++) {
  for (let j = 0; j < people.length; j++) {
    if (
      Number(people[i][0]) < Number(people[j][0]) &&
      Number(people[i][1]) < Number(people[j][1])
    ) {
      result[i]++;
    }
  }
}

let print = "";
for (let i = 0; i < result.length; i++) {
  print += String(result[i]) + " ";
}

console.log(print);

// 또 다른 출력 방법
// for (let i = 0; i < result.length; i++) {
//   process.stdout.write(result[i] + " ");
// }
