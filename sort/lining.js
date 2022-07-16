// 백준 11536 줄 세우기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = input[0];
const names = [...input.slice(1)];

function compareArr(arr1, arr2) {
  for (let i = 0; i < names.length; i++) {
    if (arr1[i] !== arr2[i]) return 0;
  }
  return 1;
}

if (compareArr(names, [...names].sort())) console.log("INCREASING");
else if (compareArr(names, [...names].sort().reverse()))
  console.log("DECREASING");
else console.log("NEITHER");
