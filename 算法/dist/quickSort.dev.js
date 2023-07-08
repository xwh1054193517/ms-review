"use strict";

// 最好情况下是O(nlogn)
function quickSort(arr, begin, end) {
  if (begin >= end) return;
  var i = begin;
  var j = end;
  var flag = arr[begin];

  while (i < j) {
    while (arr[j] >= flag && i < j) {
      j--;
    }

    while (arr[i] <= flag && i < j) {
      i++;
    }

    if (i < j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  var tmp = arr[i];
  arr[i] = arr[begin];
  arr[begin] = tmp;
  quickSort(arr, 0, i - 1);
  quickSort(arr, i + 1, end);
} // quickSort(arr, 0, a.length - 1)
// console.log(arr)


function myQuickSort(arr, left, right) {
  if (left >= right) return;
  var base = arr[left];
  var i = left,
      j = right;

  while (i < j) {
    while (i < j && arr[j] >= base) {
      j--;
    }

    while (i < j && arr[i] <= base) {
      i++;
    }

    if (i < j) {
      var _ref = [arr[j], arr[i]];
      arr[i] = _ref[0];
      arr[j] = _ref[1];
    }
  }

  var _ref2 = [arr[left], arr[i]];
  arr[i] = _ref2[0];
  arr[left] = _ref2[1];
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

var arr = [524, 5, 15, 684, 69];
myQuickSort(arr, 0, arr.length - 1);
console.log(arr); // 时间O(nlogn) 空间O(nlogn)