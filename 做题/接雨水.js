// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/trapping-rain-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var trap = function (height) {
  const len = height.length
  if (len == 0) return 0

  //记录左往右最高处
  let leftMax = new Array(len).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  //记录右往左最高处
  let rightMax = new Array(len).fill(0)
  rightMax[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }
  //在i处左右的最小值减去高度就是雨水积累量
  let res = 0
  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res
};


//栈的解法 单调栈

var trap = function (height) {
  let res = 0
  const stack = []
  const len = height.length
  for (let i = 0; i < len; i++) {
    			//height[i] > height[top]，则得到一个可以接雨水的区域
			//该区域的宽度是 i−left−1
			//高度是 min(height[left],height[i])-height[top]
    while (stack.length != 0 && height[i] > height[stack[stack.length - 1]]) {
      //为了能得到left需要将top出栈
      let top = stack.pop()
      if (stack.length == 0) break
      //top出栈之后left变成新的top
      let left = stack[stack.length - 1]
      const width = i - left - 1
      const hei = Math.min(height[left], height[i]) - height[top]
      res += width * hei
    }
    stack.push(i)
  }
  return res
};

// 双指针
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let res=0
  let left=0,right=height.length-1
  let leftMax=0,rightMax=0
  while(left<right){
    if(height[left]<height[right]){
      if(height[left]>leftMax){
        leftMax=height[left]
      }else{
        res+=leftMax-height[left]
      }
      left++
    }else{
      if(height[right]>rightMax){
        rightMax=height[right]
      }else{
        res+=rightMax-height[right]
      }
      right--
    }
  }
  return res
};

