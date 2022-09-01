// 백준 17212번 달나라 토끼를 위한 구매대금 지불 도우미

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const n = Number(input);

let dp = Array(100, 001);
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;
dp[5] = 1;
dp[6] = 2;
dp[7] = 1;

for (let i = 8; i <= n; i++) {
  dp[i] = Math.min(dp[i - 1], dp[i - 2], dp[i - 5], dp[i - 7]) + 1;
}

console.log(dp[n]);
