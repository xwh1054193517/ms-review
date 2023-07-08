"use strict";

var maxAscending = function maxAscending(arr) {
  if (arr.length <= 1) return arr.length;
  var dp = new Array(arr.length).fill(1);
  var res = 0;

  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }

      if (dp[i] > res) res = dp[i];
    }
  }

  console.log(dp);
  return res;
};

var arr = [1, 4, 2, 3, 6, 2];
console.log(maxAscending(arr));