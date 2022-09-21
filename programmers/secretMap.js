// 프로그래머스 카카오 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    let a = "";
    let temp = (arr1[i] | arr2[i]).toString(2);
    while (temp.length !== n) {
      temp = "0" + temp;
    }
    for (let j = 0; j < n; j++) {
      a += temp[j] === "0" ? " " : "#";
    }
    answer.push(a);
  }

  return answer;
}
