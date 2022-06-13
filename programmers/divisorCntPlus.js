// 프로그래머스 약수의 개수와 덧셈

function divisorCnt(x) {
  let cnt = 0; // 나 자신
  
  if (x === 1) return 1;
  
  for (let i=1; i<=x; i++) {
    if (x % i === 0) cnt++;
  }

  return cnt;
}

function solution(left, right) {
  var answer = 0;
  let cntArr = [];

  for (let i=left; i<=right; i++) {
    cntArr.push(divisorCnt(i));
    answer = (divisorCnt(i)%2 === 0) ? answer + i : answer - i;
  }
  
  return answer;
}