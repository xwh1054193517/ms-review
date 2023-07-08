"use strict";

// nlogn
function mergeSort(arr) {
  var len = arr.length;

  if (len < 2) {
    return arr;
  }

  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var res = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  return res;
}

var arr = [2, 5, 7, 1, 3, 12];
console.log(mergeSort(arr)); // 时间空间都是O(nlogn)