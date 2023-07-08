function getWinner(arr,k){
  let prev=Math.max(arr[0],arr[1])
  if(k==1){
    return prev
  }
  let count=1,maxNum=prev
  let len=arr.length
  for(let i=2;i<len;i++){
    let cur=arr[i]
    if(prev>cur){
      count++
      if(count==k){
        return prev
      }
    }else{
      prev=cur
      count=1
    }
    maxNum=Math.max(maxNum,cur)
  }
  return maxNum
}

let arr=[2,1,4,3,6,5,0,7]
console.log(getWinner(arr,3));

// 如果遍历arr 之后仍未发现有整数赢得 k 个连续回合，则不需要继续模拟，数组 arr 中的最大值 maxNum 即为游戏的赢家。。

// 因此在遍历arr 之后，maxNum 一定位于 arr[0]