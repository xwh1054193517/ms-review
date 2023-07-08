// 已知期末成绩 f, 平时分占比 p, 期末成绩占比q。 总成绩等于：（ 平时分占比 * 平时分） + （期末成绩占比 * 期末成绩）
// 及格标准是总成绩大于等于60。 现在给每个同学打平时分， 要求在期末成绩越高， 平时分越高的前提下使及格的人数最多
// 思路： 期末成绩从大到小排序， 给第一个也就是成绩最高的平时分打100分， 遍历期末成绩， 遇到后成绩不等于前一个成绩的， 平时分就减一
// n是人数，score是分数
const [n,p,q] = read_line().split(" ").map((item)=>parseInt(item))
const score = read_line().split(" ").map((item)=>parseInt(item))


score.sort((a,b)=>b-a)
let normal=100,num=0
for(let i=0;i<n;i++){
  if(i>0&&score[i]!=score[i+1]){
    normal--
  }
  let final=normal*p/100+score*q/100;
  if(final>=60)num++
}
console.log(num);