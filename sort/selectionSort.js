// 선택 정렬
// 시간 복잡도 O(n^2)

const arr = [5, 2, 3, 6, 1, 7];

function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let minIndex = i;
    for (let j=i+1; j<arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}

selectionSort(arr);