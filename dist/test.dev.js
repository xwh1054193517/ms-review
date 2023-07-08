"use strict";

function show(value) {
  switch (value) {
    case 'A':
      console.log('a');
      break;

    default:
      console.log('gg');
      break;
  }
}

show(new String("A"));
var obj = {
  a: 1,
  b: [1, 2, 3]
};
var arr = obj.b;
arr = [2, 3, 4];
console.log(obj);
console.log(arr);