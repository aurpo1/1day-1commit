// 백준 덩치

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());
const people = input.map((el) => el.split(" "));

let result = Array(n).fill(1, 0);

for (let i = 0; i < people.length; i++) {
  for (let j = 0; j < people.length; j++) {
    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      result[i]++;
    }
  }
}

for (let i = 0; i < result.length; i++) {
  process.stdout.write(result[i] + " ");
}
