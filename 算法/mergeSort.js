// nlogn

function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const res = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

let arr=[2,5,7,1,3,12]
console.log(mergeSort(arr));

// 时间空间都是O(nlogn)