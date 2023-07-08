
// 例： "ATTTAA" 变成 "TTAATT"的操作是，02交换、34交换、5修改所以操作数是3次
// 思路：比较原DNA和目标DNA的不同，优先交换，毕竟一次交换可以匹配两个，最后剩下没得交换了只能修改了。
function changeDna(str1,str2){
  let diffA=0,diffT=0
  for(let i=0;i<str1.length;i++){
    if(str1[i]!==str2[i]&&str1[i]==='A'){
      diffA++
    }else if(str1[i]!==str2[i]&&str1[i]==='T'){
      diffT++
    }
  }
  let changeTime=Math.abs(diffA-diffT)
  return changeTime+Math.min(diffA,diffT)
}
