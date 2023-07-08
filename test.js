function show(value) {
  switch (value) {
    case 'A':
      console.log('a');
      break;
    default:
      console.log('gg');
      break
  }
}

show(new String("A"))



let obj={
  a:1,
  b:[1,2,3]
}
let arr=obj.b
arr=[2,3,4]
console.log(obj);
console.log(arr);

