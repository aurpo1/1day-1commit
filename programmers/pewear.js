//프로그래머스 체육복

function solution(n, lost, reserve) {
  const intersection = reserve.filter(x => lost.includes(x));

  // 여벌 가져온 학생이 잃어버렸을 때 그 학생은 체육복을 빌려줄 수 없다.
  // 또한 빌리지 않아도 되니까 lost에서도 제외한다.
  reserve = reserve.filter(x => !intersection.includes(x));
  lost = lost.filter(x => !intersection.includes(x));

  reserve.sort();
  lost.sort();

  var answer = n - lost.length;

  for (let i=0; i<lost.length; i++) {
    for (let j=0; j<reserve.length; j++) {
      if ((lost[i] - 1) === reserve[j] || (lost[i] + 1) === reserve[j]) {
        answer++;
        reserve[j] = 0; // 하나만 빌려주면 끝
        lost[i] = 0; // 빌렸다
      }
    }
  }

  return answer;
}

console.log(solution(10, [1,2,3,5], [4,5,6,8]));