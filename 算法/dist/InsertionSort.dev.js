"use strict";

// O(n2) 空间O(1)
function insertionSort(arr) {
  var len = arr.length;
  var preIdx, cur;

  for (var i = 1; i < len; i++) {
    preIdx = i - 1;
    cur = arr[i];

    while (preIdx >= 0 && arr[preIdx] > cur) {
      arr[preIdx + 1] = arr[preIdx];
      preIdx--;
    }

    arr[preIdx + 1] = cur;
    console.log(arr);
  }

  return arr;
} // O(n2)，适用于数据量不大，算法稳定性要求高，且数据局部或整体有序的数列排序


var arr = [17, 5, 7, 1, 3, 12];
console.log(insertionSort(arr));

function foo(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var c = arguments.length > 2 ? arguments[2] : undefined;
  arguments[0] = 99;
  console.log(arguments);
  console.log(a);
  console.log(foo.length);
}

foo(1, 2, 3);
console.log(3 .toString()); // console.log(3.toString());