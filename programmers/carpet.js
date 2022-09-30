// 프로그래머스 카펫

function solution(brown, yellow) {
  var answer = [];

  // yellow로 만들수 있는 직사각형 만들어봄
  // 가로a 세로b 이면 2(a+b)+4 = 갈색 개수
  // 그게 맞는 a b 가 있다면 결과는 a+2 b+2
  let small = [];
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) small.push(i);
  }

  small.forEach((el) => {
    let div = yellow / el;
    if (2 * (el + div) + 4 === brown) {
      answer.push(div + 2, el + 2);
      return false;
    }
  });

  return answer;
}
