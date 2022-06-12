// 프로그래머스 콜라츠 추측

function solution(num) {
  var answer = 0;

  for (let cnt=1; cnt<=500; cnt++) {
    if (num === 1) return 0;
    num = (num%2 === 0) ? num/2 : num*3 + 1;
    answer = cnt;
    if (num === 1) return answer;
  }

  return -1;
}