// 最好情况下是O(nlogn)
function quickSort(arr, begin, end) {
  if (begin >= end) return
  let i = begin;
  let j = end;
  let flag = arr[begin];
  while (i < j) {
    while (arr[j] >= flag && i < j) {
      j--
    }
    while (arr[i] <= flag && i < j) {
      i++
    }
    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
    }

  }
  let tmp = arr[i]
  arr[i] = arr[begin]
  arr[begin] = tmp
  quickSort(arr, 0, i - 1)
  quickSort(arr, i + 1, end)
}


// quickSort(arr, 0, a.length - 1)
// console.log(arr)


function myQuickSort(arr, left, right) {
  if (left >= right) return
  let base = arr[left]
  let i = left,
    j = right
  while (i < j) {
    while (i < j && arr[j] >= base) j--;
    while (i < j && arr[i] <= base) i++;
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i],arr[left]]=[arr[left],arr[i]]
  quickSort(arr,left,i-1)
  quickSort(arr,i+1,right)
}

let arr = [524, 5, 15, 684, 69]
myQuickSort(arr, 0, arr.length - 1)
console.log(arr);

// 时间O(nlogn) 空间O(nlogn)

