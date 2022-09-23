// 프로그래머스 카카오 메뉴 리뉴얼

function solution(orders, course) {
  var answer = [];

  // 조합 구하는 함수
  const getCombi = (arr, num) => {
    let results = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((el, i, origin) => {
      const rest = origin.slice(i + 1);
      const combi = getCombi(rest, num - 1);
      const attached = combi.map((combi) => [el, ...combi]);
      results.push(...attached);
    });
    return results;
  };

  let combis = {};
  course.forEach((c) => {
    let temp;
    let max = 0;
    if (orders.length >= c) {
      orders.forEach((el) => {
        let order = el.split("");
        temp = getCombi(order, c);
        temp.forEach((el) => {
          let name = el.sort().join("");
          if (combis[name]) {
            combis[name] += 1;
            if (combis[name] > max) max = combis[name];
          } else combis[name] = 1;
        });
      });
    }
    for (let combi in combis) {
      if (combi.length === c) {
        if (combis[combi] >= max && combis[combi] >= 2) answer.push(combi);
      }
    }
  });

  answer.sort();
  return answer;
}
