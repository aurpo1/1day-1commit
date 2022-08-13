// 백준 20115번 에너지 드링크

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());
let drinks = input.shift().split(" ").map(Number);

const maxDrink = Math.max(...drinks);
drinks.splice(drinks.indexOf(maxDrink), 1);
drinks = drinks.map((el) => Number((el / 2).toFixed(5)));
let sum = drinks.reduce((a, b) => a + b);

console.log(sum + maxDrink);
