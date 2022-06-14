// 프로그래머스 없는 숫자 더하기

function solution(numbers) {
  var answer = 0;
  
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let notNums = nums.filter(n => !numbers.includes(n));
  
  for (let i=0; i<notNums.length; i++) {
    answer += notNums[i];
  }
  return answer;
}