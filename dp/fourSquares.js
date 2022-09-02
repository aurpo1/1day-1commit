// 백준 17626번 Four Squares

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const n = Number(input);

const dp = Array(n + 1);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  let min = 50001;

  for (let j = 1; j * j <= i; j++) {
    let temp = i - j * j;
    min = Math.min(dp[temp], min);
  }
  dp[i] = min + 1;
}

console.log(dp[n]);
