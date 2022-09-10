// 백준 1931번 회의실 배정
// 끝나는 시간대로 정렬한 후, 끝나는 시간이 다음 시작 시간보다 작거나 같은 것의 개수를 세면 된다.
// 정렬할 때, 끝나는 시간이 같은 경우 시작 시간에 따라 정렬해야한다.

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const n = Number(input.shift());

let time = [];
for (let i = 0; i < n; i++) {
  time.push(input[i].split(" ").map(Number));
}
time.sort((a, b) => {
  return a[1] === b[1] ? a[0] - a[1] : a[1] - b[1];
});

let end = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  let [s, e] = time[i];
  if (s >= end) {
    result++;
    end = e;
  }
}
console.log(result);
