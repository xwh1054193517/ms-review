// words = ["lc","cl","gg"]
// 输出：6
// 解释：一个最长的回文串为 "lc" + "gg" + "cl" = "lcggcl" ，长度为 6 。
// "clgglc" 是另一个可以得到的最长回文串
var longestPalindrome = function(words) {
  let res=0
  let map=new Array(26).fill(0).map( () => new Array(26).fill(0) )
  let helpCode=('a'.charCodeAt())
  for(let s of words){
    map[s[0].charCodeAt()-helpCode][s[1].charCodeAt()-helpCode]+=1
  }
  for(let s of words){
    let str1=s.charCodeAt(0)
    let str2=s.charCodeAt(1)
    if(map[str1-helpCode][str2-helpCode]==0)continue
    //回文 如果大于1就-2 长度加四  否则跳过 后面处理
    if(str1==str2){
      if(map[str1-helpCode][str2-helpCode]>1){
        map[str1-helpCode][str2-helpCode]-=2
        res+=4
      }
      continue
    }
    // 如果反过来存在就一起减1个
    if(map[str2-helpCode][str1-helpCode]>0){
      res+=4
      map[str1-helpCode][str2-helpCode]-=1
      map[str2-helpCode][str1-helpCode]-=1
    }
  }
  // 遇到第一个回文 长度加2 跳出
  for(let i=0;i<26;i++){
    if(map[i][i]>0){
      res+=2;
      break
    }
  }
  return res
};