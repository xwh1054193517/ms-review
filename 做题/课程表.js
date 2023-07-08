// 拓扑排序 入度问题
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  //统计入度
  const arr=new Array(numCourses).fill(-1)
  for(let p of prerequisites){
    const com=p[0]
    const inpoint=p[1]
    if(arr[inpoint]==-1)arr[inpoint]=0
    if(arr[com]==-1)arr[com]=0
    arr[com]++
  }
  const s=new Set()
  //不需要前置的 
  for(let i=0;i<arr.length;i++){
    if(arr[i]==-1)s.add(i)
  }
  while(true){
    const queue=getLevel(prerequisites,arr)
    for(let item of queue){
      arr[item[0]]--
      s.add(item[1])
    }
    if(queue.length==0)break
  }
  for(let i=0;i<numCourses;i++){
    if(arr[i]>0)return []
    if(!s.has(i))s.add(i)
  }
  return Array.from(s)
};



function getLevel(prerequisites,arr){
  //找出入度为0的元素
  const queue=prerequisites.filter(item=>{
    const p=item[1]
    return arr[p]==0
  })
  if(queue.length){
    //标记为-2去掉这些元素
    for(let i=0;i<arr.length;i++){
      if(arr[i]==0)arr[i]=-2
    }
  }
  return queue
}



