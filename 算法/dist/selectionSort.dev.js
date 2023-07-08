"use strict";

function selectionSort(arr) {
  var len = arr.length;
  var minIdx, template;

  for (var i = 0; i < len - 1; i++) {
    minIdx = i;

    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    template = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = template;
  }

  return arr;
} // O(n^2)  空间O(1)


var arr = [2, 5, 7, 1, 3, 12];
console.log(selectionSort(arr));