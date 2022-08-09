// 백준 2422번 한윤정이 이탈리아에 가서 아이스크림을 사먹는데

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

let combiList = Array.from(Array(n + 1), () => new Array());

for (let i = 0; i < m; i++) {
  let combi = input[i].split(" ").map(Number);
  combiList[combi[0]].push(combi[1]);
  combiList[combi[1]].push(combi[0]);
}

let cnt = 0;

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    if (!combiList[i].includes(j)) {
      for (let k = j + 1; k <= n; k++) {
        if (!combiList[i].includes(k) && !combiList[j].includes(k)) {
          console.log(i, j, k);
          cnt++;
        }
      }
    }
  }
}

console.log(cnt);
