// 프로그래머스 카카오 신규 아이디 추천

function solution(new_id) {
  var answer = "";
  let digit = /[0-9]/;
  let alphabet = /[a-z]/;
  const isSymbol = (s) => {
    if (s === "-" || s === "_" || s === ".") return true;
    else return false;
  };

  // step 1
  new_id = new_id.toLowerCase();

  // step 2
  let id = "";
  for (let i = 0; i < new_id.length; i++) {
    if (alphabet.test(new_id[i]) || digit.test(new_id[i]) || isSymbol(new_id[i])) id += new_id[i];
  }
  new_id = id;

  // step 3
  new_id = new_id.replace(/\.\.+/g, ".");

  // step 4
  if (new_id[0] === ".") new_id = new_id.slice(1, new_id.length);
  if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);

  // step 5
  if (new_id.length === 0) new_id = "a";

  // step 6
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);
  }

  // step 7
  if (new_id.length <= 2) {
    while (new_id.length !== 3) {
      new_id += new_id[new_id.length - 1];
    }
  }
  answer = new_id;
  return answer;
}
