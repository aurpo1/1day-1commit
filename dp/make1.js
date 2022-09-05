// 백준 1463번 1로 만들기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const n = Number(input);

let dp = [];
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 3;
dp[6] = 2;

for (let i = 7; i <= n; i++) {
  if (i % 6 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 2], dp[i / 3]) + 1;
  } else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 2]) + 1;
  } else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 3]) + 1;
  } else dp[i] = dp[i - 1] + 1;
}
console.log(dp[n]);
