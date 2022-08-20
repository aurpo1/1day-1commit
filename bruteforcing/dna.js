// 백준 1969번 DNA

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

let dna = [];
for (let i = 0; i < n; i++) {
  let temp = input[i].split("");
  if (temp.includes("\r")) temp.pop();
  dna.push(temp);
}

let result = [];

for (let i = 0; i < m; i++) {
  let temp = {};
  for (let j = 0; j < n; j++) {
    if (temp[dna[j][i]]) temp[dna[j][i]] += 1;
    else temp[dna[j][i]] = 1;
  }
  let sortTemp = {};
  Object.keys(temp)
    .sort()
    .forEach((key) => (sortTemp[key] = temp[key]));

  let maxVal = Math.max(...Object.values(sortTemp));
  let keys = Object.keys(sortTemp);
  for (let j = 0; j < keys.length; j++) {
    if (sortTemp[keys[j]] === maxVal) {
      result.push(keys[j]);
      break;
    }
  }
}

console.log(result.join(""));

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dna[i][j] !== result[j]) {
      cnt++;
    }
  }
}
console.log(cnt);
