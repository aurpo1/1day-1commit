// 백준 11047 동전 0

// 10 4200
// 1000 10000 1000 1000 100 100

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const nk = input[0].split(" ").map(Number);
const coinValue = input.splice(1).map(Number).reverse();

let result = 0;

for (let i=0; i < nk[0]; i++) {
  while (nk[1] >= coinValue[i]) {
    result++;
    nk[1] -= coinValue[i];

    if (!nk[0]) break;
  }
}

console.log(result);