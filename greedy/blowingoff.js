// 백준 19939번 박 터뜨리기

// 바구니에 담긴 공의 개수는 모두 달라야 하므로
// 바구니 안에 바구니의 개수만큼 1, 2, 3, ..., n 이렇게 채운다.
// case 1: 공의 합계가 실제 공의 개수보다 크면 -> 바구니 채울 수 없음
// case 2: 공의 합계와 실제 공의 개수가 같으면 -> 그 방법밖에 없으므로 k-1 차이 남
// case 3: 그 이외에는 가장 공 많은 바구니에서부터 실제 공의 개수가 될 때까지 공을 채워감

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const n = Number(input[0]); //공의 개수
const k = Number(input[1]); //바구니 개수

function solution(n, k) {
  let ballMin = k * (k + 1) / 2;

  // case 1
  if (ballMin > n) {
    return -1;
  } 
  // case 2
  else if (ballMin === n) { 
    return (k-1);
  }
  //case 3
  else {
    let temp = Array(k).fill().map((_, i) => i+1);

    for (let i = k-1; i >= 0; i--) {
      temp[i]++;
      ballMin++;
      if (ballMin === n) return (temp[k-1]-temp[0]);
      if (i === 0) i = k;
    }
  }
}

console.log(solution(n, k));

