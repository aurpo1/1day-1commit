function solution(numbers, hand) {
  let answer = "";
  let leftHand = 10;
  let rightHand = 12;

  const left = [1, 4, 7, 10];
  const right = [3, 6, 9, 12];

  const leftMove = (num) => {
    leftHand = num;
    answer += "L";
  };

  const rightMove = (num) => {
    rightHand = num;
    answer += "R";
  };

  const distance = (cur, target) => {
    if (target === 0) target = 11;
    if (cur === 0) cur = 11;

    if (Math.abs(cur - target) % 3 === 0) {
      return Math.abs(cur - target) / 3;
    }

    let temp;
    if (Math.abs(cur - target) === 1) return 1;
    if (left.includes(cur)) {
      temp = Math.abs(cur - target + 1) / 3 + 1;
    } else {
      temp = Math.abs(cur - target - 1) / 3 + 1;
    }
    return temp;
  };

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      leftMove(numbers[i]);
    } else if (right.includes(numbers[i])) {
      rightMove(numbers[i]);
    } else {
      let vs = distance(rightHand, numbers[i]) - distance(leftHand, numbers[i]);
      if (vs > 0) {
        leftMove(numbers[i]);
      } else if (vs < 0) {
        rightMove(numbers[i]);
      } else {
        if (hand === "left") {
          leftMove(numbers[i]);
        } else {
          rightMove(numbers[i]);
        }
      }
    }
  }

  return answer;
}
