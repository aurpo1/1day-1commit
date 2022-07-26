// 백준 10815번 숫자 카드

const fs = require("fs");
const input = fs.readFileSync("input1.txt").toString().trim().split("\n");

const n = Number(input.shift());
const numCards = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const m = Number(input.shift());
const test = input.shift().split(" ").map(Number);

const binarySearch = (arr, target, start, end) => {
  if (start > end) return 0;
  let mid = parseInt((start + end) / 2);
  if (arr[mid] === target) return 1;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
};

let result = "";
for (let i = 0; i < m; i++) {
  result += binarySearch(numCards, test[i], 0, n - 1) + " ";
}

console.log(result);
