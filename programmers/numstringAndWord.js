// 프로그래머스 숫자 문자열과 영단어
// 소문자 a-z의 유니코드는 97-122

function solution(s) {
  var answer = 0;

  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  s = s.split("");
  let result = [];
  let temp = [];

  for (let i=0; i<s.length; i++) {
    if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      temp.push(s[i]);
      for (let j=0; j<words.length; j++) {
        if (temp.join('') === words[j]) {
          result.push(words.indexOf(words[j]));
          temp = [];
        }
      }
    } else {
      result.push(parseInt(s[i], 10));
    }
  }
  answer = parseInt(result.join(""), 10);
  return answer;
}
