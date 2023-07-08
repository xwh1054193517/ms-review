// 输入：grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
// 输出：[1,-1,-1,-1,-1]
// 解释：示例如图：
// b0 球开始放在第 0 列上，最终从箱子底部第 1 列掉出。
// b1 球开始放在第 1 列上，会卡在第 2、3 列和第 1 行之间的 "V" 形里。
// b2 球开始放在第 2 列上，会卡在第 2、3 列和第 0 行之间的 "V" 形里。
// b3 球开始放在第 3 列上，会卡在第 2、3 列和第 0 行之间的 "V" 形里。
// b4 球开始放在第 4 列上，会卡在第 2、3 列和第 1 行之间的 "V" 形里。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/where-will-the-ball-fall
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findBall = function(grid) {
    let height=grid.length;
    let width=grid[0].length
    let res=new Array(width)
    for(let i=0;i<width;i++){
      res[i]=-1
      for(let cur=i,j=0;j<height;j++){
        //cur记录球的位置
        if(grid[j][cur]==1){
          if(cur<width-1&&grid[j][cur+1]==1)cur++
          else break
        }else if(grid[j][cur]==-1){
          if(cur>0&&grid[j][cur-1]==-1)cur--
          else break
        }
        if(j==height-1){
          res[i]=cur
        }
      }
    }
    return res

};