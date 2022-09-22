// 프로그래머스 주차 요금 계산

function solution(fees, records) {
  var answer = [];
  let inList = {};
  let sum = {};

  // 차량의 누적 시간 계산하기
  for (let i = 0; i < records.length; i++) {
    let [time, num, status] = records[i].split(" ");
    if (!inList[num] && status === "IN") {
      // 들어온 차량
      inList[num] = time;
    } else {
      // 나가는 차량 있을 시 누적 시간 계산
      let [inh, inm] = inList[num].split(":").map(Number);
      let [outh, outm] = time.split(":").map(Number);
      let diff = 0;

      if (inh === outh) diff = outm - inm;
      else if (inm > outm) {
        diff = (outh - inh - 1) * 60 + outm + 60 - inm;
      } else {
        diff = (outh - inh) * 60 + outm - inm;
      }

      if (sum[num]) sum[num] += diff;
      else sum[num] = diff;
      delete inList[num];
    }
  }

  // 남은 차량이 있는 경우
  let left = Object.keys(inList);
  while (left.length !== 0) {
    let leftNum = left.shift();
    let [inh, inm] = inList[leftNum].split(":").map(Number);
    let diff = (23 - inh) * 60 + 59 - inm;
    if (sum[leftNum]) sum[leftNum] += diff;
    else sum[leftNum] = diff;
  }

  // 주차 요금 계산하기
  // fees = [기본 시간, 기본 요금, 단위 시간, 단위 요금]
  let feeList = [];
  let payNumList = Object.keys(sum).sort();
  for (let i = 0; i < payNumList.length; i++) {
    let diff = sum[payNumList[i]];
    let pay = 0;

    if (diff <= fees[0]) pay = fees[1];
    else {
      pay = fees[1] + Math.ceil((diff - fees[0]) / fees[2]) * fees[3];
    }
    answer.push(pay);
  }
  return answer;
}
