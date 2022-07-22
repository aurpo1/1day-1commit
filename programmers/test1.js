// 직사각형 남은 한 좌표 구하기

const input = [
  [1, 4],
  [3, 4],
  [3, 10],
];

const solution = (arr) => {
  let result = [];

  let xs = arr.map((x) => x[0]);
  let ys = arr.map((y) => y[1]);

  console.log(xs, ys);
  let xIndex = xs.map((x) => xs.indexOf(x) !== xs.lastIndexOf(x));
  let yIndex = ys.map((y) => ys.indexOf(y) !== ys.lastIndexOf(y));
  result.push(xs[xIndex.indexOf(false)]);
  result.push(ys[yIndex.indexOf(false)]);

  return result;
};

console.log(solution(input));
