// 讲述的是字符串复制，
// 题目大概就是给定两个字符串a, b，操作a 能否得到b。 
// 其中  关键：只能操作a中的字符插入其位置的下一个位置上，经过无限次操作后能否得到b。


// const n = read_line().split(" ").map((item) => parseInt(item))


// for (let i = 0; i < n; i++) {
//   let strArr = read_line().split(" ")
//   let a = strArr[0]
//   let b = strArr[1]
// }


function canCopy(a, b) {
  //如果a比b长
  if (a.length > b.length) return false
  if (a.length == b.length && a === b) return true

  let i = 0,
    j = 0
  while (j < b.length && i < a.length) {
    if (b[j] == a[i]) {
      j++;
      i++
    } else if (i > 0 && b[j] == a[i - 1]) {
      j++
    } else {
      return false
    }
  }
  while(j<b.length){
    if(b[j]!=a[a.length-1]){
      return false
    }
    j++
  }
  if(i==a.length){
    return true
  }
  return false
}

console.log(canCopy('aba','abbcaa'))