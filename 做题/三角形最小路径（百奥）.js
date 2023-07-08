// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。


var minimumTotal = function(triangle) {
  let len=triangle.length
  let dp=new Array(len).fill(0).map(()=>new Array(len).fill(0))
  dp[0][0]=triangle[0][0]
  for(let i=1;i<len;i++){
    dp[i][0]=dp[i-1][0]+triangle[i][0]
    dp[i][i]=dp[i-1][i-1]+triangle[i][i]
    for(let j=1;j<i;j++){
      dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j])+triangle[i][j]
    }
  }
  let res=dp[len-1][0]
  for(let i=0;i<len;i++){
    res=Math.min(dp[len-1][i],res)
  }
  return res
};
