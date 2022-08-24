// 백준 9655번 돌 게임

const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

console.log(input % 2 === 0 ? "CY" : "SK");
