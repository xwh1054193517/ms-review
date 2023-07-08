.0// 1.
Promise.reject(1).then(console.log).catch(console.log).then(console.log)
// promise.reject返回一个reject状态的promise
// then有两个回调一个成功一个失败 
// reject一般来说会进入  then的第二个回调如果没有，就进入catch
// catch处理了reject输出1 回调中没有返回值，包装成一个Promise.resolve(undefined)
// then成功回调输出undefined

// 阶段:
// reject返回一个reject状态的promise 
// then之后返回一个reject状态的promise 
// catch之后返回一个fulfilled为undefined的promise
// (then和catch其实catch使用then实现的,处理完resolve和rejectd回调后，如果没有返回值，就包装成undefined的成功promise)

// 输出1 undefined


// 2.
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
// promise源码：then接受回调函数，不是函数就
// 所有一直到最后一个then都是状态为fulfilled且值为1的promise
// 最后一个then输入时函数就输出
//输出1

// 3.
var foo = function foo() {
  console.log(foo === foo);
}
foo()
// 返回true

// 4.
(true + false) > 2 + true
// 左边结果是1+0=1 右边结果是2+1=3
//输出false

// 5.
let obj = {
  a: 2
}
test.call(obj, 3)

function test(a) {

  const fn = (a) => {
    //箭头函数没有自己的arguments 所以继承test的 call中的3
    console.log(arguments[0]);
    //this指向Obj
    console.log(this.a);
  }
  fn(1)
}s
//输出 3 2


