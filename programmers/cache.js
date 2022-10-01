// 프로그래머스 캐시

function solution(cacheSize, cities) {
  var answer = 0;

  let cache = [];

  // 가장 오래된 데이터를 삭제한다.
  const lru = (list, c) => {
    if (list.length >= cacheSize) {
      list.shift();
      list.push(c);
    } else list.push(c);
  };

  cities.forEach((city) => {
    if (cacheSize === 0) {
      answer = 5 * cities.length;
      return false;
    }

    city = city.toLowerCase();
    let i = cache.indexOf(city);

    if (i !== -1) {
      answer += 1;
      cache.splice(i, 1);
      lru(cache, city);
    } else {
      answer += 5;
      lru(cache, city);
    }
  });
  return answer;
}
