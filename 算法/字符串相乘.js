var line
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return '0'
  const res = []
  for (let i = 0; i < num1.length; i++) {
    //获得尾元素
    let temp1 = num1[num1.length - 1 - i]
    for (let j = 0; j < num2.length; j++) {
      let temp2 = num2[num2.length - 1 - j]
      let pos = res[i + j] ? res[i + j] + temp1 * temp2 : temp1 * temp2
      res[i + j] = pos % 10;
      pos >= 10 && (res[i + j + 1] = res[i + j + 1] ? res[i + j + 1] + Math.floor(pos / 10) : Math.floor(pos / 10))
    }
  }
  return res.reverse().join("")
}

let num1 = "123",
  num2 = "456";
console.log(multiply(num1, num2));