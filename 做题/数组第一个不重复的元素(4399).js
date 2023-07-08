function findFirstUnique(arr){
  let m=new Map()
  for(let i=0;i<arr.length;i++){
    if(m.has(arr[i])){
      let times=m.get(arr[i])
      m.set(arr[i],times+1)
    }else{
      m.set(arr[i],1)
    }
  }

  for(let i=0;i<a.length;i++){
    let time=m.get(arr[i])
    if(time==1){
      console.log(arr[i]);
      break;
    }
  }
}