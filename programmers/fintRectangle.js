// 프로그래머스 멀쩡한 사각형 찾기
function solution(w, h) {
  let answer = 1;
  const total = w * h;

  // w, h의 최대 공약수 찾기 => x
  // 서로소끼리의 사각형에서 못 쓰는 사각형 개수 찾기 => delNum
  // total - x * delNum

  let x = 1;
  for (let i = 1; i <= Math.min(w, h); i++) {
    if (w % i === 0 && h % i === 0) {
      x = i;
    }
  }
  const ww = w / x;
  const hh = h / x;

  let delNum = 0;
  delNum = ww + hh - 1;

  answer = total - x * delNum;

  return answer;
}
