// 프로그래머스 스킬 체크 테스트 level 1.

function solution1(n) {
  var answer = "";

  for (let i = 1; i <= n; i++) {
    answer += i % 2 === 0 ? "박" : "수";
  }

  return answer;
}

function solution2(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  if (answer === "") answer = participant.pop();
  return answer;
}
