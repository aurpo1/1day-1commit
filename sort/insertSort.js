// 삽입 정렬
// 시간 복잡도 O(n^2)

function insertSort(arr) {
  for(let i=1; i<input.length; i++) {
    let temp = arr[i];

    let prev = i-1;

    while (prev >= 0 && arr[prev] > temp) { // temp가 정렬된 원소보다 작으면 정렬된 원소를 뒤로 옮긴다.
      arr[prev+1] = arr[prev];
      prev--;
    }

    // temp와 앞의 원소들이 다 정렬되었으니 temp는 temp의 자리에 넣는다.
    arr[prev+1] = temp;
  }
  return arr;
}