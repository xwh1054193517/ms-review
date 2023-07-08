var combinationSum = function(candidates, target) {
  let res=[]
  let len=candidates.length
  if(len==0)return res
  candidates.sort((a,b)=>a-b)
  let path=[]
  dfs(candidates,0,len,target,path,res)

  function dfs(candidates,begin,len,target,path,res){
  if(target==0){
    res.push(path.slice())
    return
  }
  for(let i=begin;i<len;i++){
    if(target-candidates[i]<0){
      break;
    }
    path.push(candidates[i])
    dfs(candidates,i,len,target-candidates[i],path,res)
    path.pop()
  }
}
return res
};
let arr=[1,2,4,4,5]
console.log(combinationSum(arr,6))