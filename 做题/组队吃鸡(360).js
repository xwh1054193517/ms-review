
// 题目：A表示 1 个人队伍，B表示 2 个人队伍， C表示 3 个人， D表示4个人的队伍。可以任意将一个队伍加入到另一个队伍，产生一个新队伍，
//             但是人数不能大于4, 也不拆队，必须整体加入。 求4个人的队伍最多有多少个
//     思路： D的队伍不需要动，结果直接加入D的个数; C的队伍只能和A结合，结果加他们的较小者就好了; A减去和C结合的个数后，A,B之间可以任意组合，结果加入 Math.floor(A+2*B)/4

//共有多少个样例
// const n=parseInt(read_line())
// for(let i=0;i<n;i++){
//   // let arr=read_line().split(" ").map((item)=>parseInt(item))
//   let arr=[5,3,6,2]
//   // 4人组不用动
//   let res=arr[3]
//   //3-1
//   let r1r3=Math.min(arr[0],arr[2])
//   //2-2
//   res+=r1r3
//   arr[0]-=r1r3
//   let r2r2=Math.floor(arr[1]/2)
//   res+=r2r2
//   arr[1]=arr[1]-r2r2*2
//   //2-1-1
//   let r2r1r1=Math.floor(Math.min(arr[0]/2,arr[1]))
//   res+=r2r1r1
//   arr[0]=arr[0]-r2r1r1*2
//   arr[1]-=r2r1r1
//   //1-1-1-1
//   let r1r4=Math.floor(arr[0]/4)
//   res+=r1r4
//   console.log(res);
// }

let arr=[5,3,6,2]
// 4人组不用动
let res=arr[3]
//3-1
let r1r3=Math.min(arr[0],arr[2])
//2-2
res+=r1r3
arr[0]-=r1r3
let r2r2=Math.floor(arr[1]/2)
res+=r2r2
arr[1]=arr[1]-r2r2*2
//2-1-1
let r2r1r1=Math.floor(Math.min(arr[0]/2,arr[1]))
res+=r2r1r1
arr[0]=arr[0]-r2r1r1*2
arr[1]-=r2r1r1
//1-1-1-1
let r1r4=Math.floor(arr[0]/4)
res+=r1r4
console.log(res);