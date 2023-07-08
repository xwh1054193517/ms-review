// 贪心算法，又称贪婪算法，是算法设计中的一种思想
// 其期待每一个阶段都是局部最优的选择，从而达到全局最优，但是结果并不一定是最优的

// 贪心选择：当某一个问题的整体最优解可通过一系列局部的最优解的选择达到，并且每次做出的选择可以依赖以前做出的选择，但不需要依赖后面需要做出的选择
// 最优子结构：如果一个问题的最优解包含其子问题的最优解，则此问题具备最优子结构的性质。问题的最优子结构性质是该问题是否可以用贪心算法求解的关键所在

// 回溯
// 回溯算法会先从一个可能的工作开始解决问题，如果不行，就回溯并选择另一个动作，知道将问题解决

// res=[]
// function backtrack(路径,选择列表)：
// if 满足结束条件:
// result.add(路径)
// return

// for 选择 of 选择列表:
// 做选择
// backtrack(路径, 选择列表)
// 撤销选择

// 全排列 经典回溯
let permute = (nums) => {
  const res = [],
    path = []
  backtracking(nums, nums.length, [])
  return res

  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path))
      return
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true
      backtracking(n, k, used)
      path.pop()
      used[i] = false;
    }
  }
}

let arr=[1,2,3]
console.log(permute(arr));

//有重复数字
var permuteUnique = function(nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
      if (idx === nums.length) {
          ans.push(perm.slice());
          return;
      }
      for (let i = 0; i < nums.length; ++i) {
          if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
              continue;
          }
          perm.push(nums[i]);
          vis[i] = true;
          backtrack(idx + 1, perm);
          vis[i] = false;
          perm.pop();
      }
  }
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};
