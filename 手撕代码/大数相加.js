let a = "9007199254740991";
let b = "1234567899999999999";

function add(a,b){
  let maxlength=Math.max(a.length,b.length)
  a=a.padStart(maxlength,0)
  b=b.padStart(maxlength,0)
  let total=0
  let carry=0
  let sum=""
  for(let i=maxlength-1;i>=0;i--){
    total=parseInt(a[i])+parseInt(b[i])
    carry=Math.floor(total/10)
    sum=total%10+sum
  }
  if(carry!=0){
    sum=''+carry+sum
  }
  return sum
}

console.log(add(a,b));