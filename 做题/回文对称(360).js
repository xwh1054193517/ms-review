function check(str){
  if(isHuiwen(str)&&isduichen(str)){
    console.log('YES')
  }else{
    console.log("No")
  }
}


function isHuiwen(str) {
  let len=str.length;
  for(let i=0;i<len/2;i++){
    if(str[i]!=str[len-1-i]){
      return false
    }
  }
  return true
}

function isduichen(str){
  let duichenstr = "AHIMOTUVWXY";
  let count=0
  for(let i=0;i<str.length;i++){
    if(duichenstr.includes(str[i])){
      count++
    }
  }
  if(count==str.length)return true
  else return false
}


check('AHA')