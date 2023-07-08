function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr;
}

// es6版本
function bubbleSortES6(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = true;
    // 没有交换已经排序完毕
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        flag = false
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}

// 时间 O(n^2) 空间 O(1)

let arr = [1, 6, 2, 4, 5]
console.log(bubbleSort(arr))
console.log(bubbleSortES6(arr))