let players=[]
for(let i=0;i<100;i++){
  players.push(i+1)
}
function game(num,players){
  let res=[]
  let flag=0
  while(players.length>1){
    let out=0,len=players.length
    for(let i=0;i<len;i++){
      flag++
      if(flag==num){
        flag=0
        res.push(players[i-out])
        players.splice(i-out,1)
        out++
      }
    }
  }
  console.log(res,players[0])
}

game(3,players)