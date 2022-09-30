// 프로그래머스 폰켓몬

function solution(nums) {
  var answer = 0;

  let type = new Set(nums);

  answer = type.size >= nums.length / 2 ? parseInt(nums.length / 2) : type.size;
  return answer;
}
