// 프로그래머스 모의고사

function solution(answers) {
  var answer = [];
  let result = [0, 0, 0];
  
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i=0; i<answers.length; i++) {
    if (answers[i] === p1[i%5]) {
      result[0]++;
    }
    if (answers[i] === p2[i%8]) {
      result[1]++;
    }
    if (answers[i] === p3[i%10]) {
      result[2]++;
    }
  }

  for (let i=0; i<3; i++) {
    if (result[i] === Math.max(...result)) {
      answer.push(i+1);
    }
  }

  return answer;
}