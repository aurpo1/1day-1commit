// 퀵 정렬
// 시간 복잡도 평균 O(NlogN) 최악 O(N^2)

const arr = [5, 3, 2, 7, 1, 8];

function quickSort(arr, start, end) {
  if (start >= end) return;

  let pivot = start;
  let left = start+1;
  let right = end;
  
  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) left++;
    while (right > start && arr[pivot] <= arr[right]) right--;

    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  quickSort(arr, start, right-1);
  quickSort(arr, right+1, end);
}

quickSort(arr, 0, arr.length-1);
console.log(arr);