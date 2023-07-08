function fn() {
  getName = function () {
    console.log('yifang')
  }
  return this;
}
fn.getName = function () {
  console.log('liudehua')
}
fn.prototype.getName = function () {
  console.log('zhangxueyou')
}
var getName = function () {
  console.log('zhouxingci')
}

function getName() {
  console.log('huangzesi')
}
// 依次以下代码分别输出什么 
// fn().getName();
fn.getName();
getName();
let obj=new fn()
console.log(obj)
new fn.getName();
// new new fn.getName();