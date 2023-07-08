// O(n2) 空间O(1)
function insertionSort(arr) {
  const len = arr.length;
  let preIdx, cur
  for (let i = 1; i < len; i++) {
    preIdx = i - 1;
    cur = arr[i]
    while (preIdx >= 0 && arr[preIdx] > cur) {
      arr[preIdx + 1] = arr[preIdx]
      preIdx--;
    }
    arr[preIdx + 1] = cur;
    console.log(arr)
  }
  return arr;
}


// O(n2)，适用于数据量不大，算法稳定性要求高，且数据局部或整体有序的数列排序
let arr=[17,5,7,1,3,12]
console.log(insertionSort(arr));


function foo(a,b=10,c){
  arguments[0]=99
  console.log(arguments);
  console.log(a);
  console.log(foo.length);
}

foo(1,2,3)

console.log((3).toString());
// console.log(3.toString());