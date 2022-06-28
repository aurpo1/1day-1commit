// 거품 정렬
// 시간 복잡도 O(n^2)

function bubbleSort(arr) {
  for(let i=n-1; i>0; i--) { 
    for(let j=0; j<=i; j++) {
      if (arr[j] > arr[j+1]) { // 왼쪽에 위치한 원소가 더 작다 -> 있어야할 위치가 아니다.
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}