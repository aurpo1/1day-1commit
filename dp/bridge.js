// 백준 1010번 다리 놓기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const t = Number(input.shift());

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

for (let i = 0; i < t; i++) {
  let test = input.shift().split(" ").map(Number);
  let result =
    test[0] === test[1]
      ? 1
      : Math.round(
          factorial(test[1]) /
            (factorial(test[0]) * factorial(test[1] - test[0]))
        );
  console.log(result);
}
