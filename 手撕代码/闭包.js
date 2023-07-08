// 1.函数作为返回值
// function test() {
//     const a = 1;
//     return function() {
//         console.log('a', a)
//     }
// }

// const fn = test()
// const a = 2;
// fn()


// 2.函数作为参数
// function test(fn) {
//     const a = 1;
//     fn()
// }

// const a = 2;

// function fn() {
//     console.log('a', a);
// }

// test(fn)

// 作为返回
// function a() {
//     var name = 'abc'
//     return function() {
//         return name;
//     }
// }

// var b = a()
// console.log(b())
// 在这段代码中，a()中的返回值是一个匿名函数，这个函数在a()作用域内部，所以它可以获取a()作用域下变量name的值，将这个值作为返回值赋给全局作用域下的变量b,实现了在全局变量下获取到局部变量中的变量的值

function fn() {
    var num = 3
    return function() {
        var n = 0
        console.log(++n)
        console.log(++num)
    }
}

var f1 = fn()
f1()
f1()

// ，匿名函数作为fn的返回值被赋值给了fn1，这时候相当于fn1=function(){var n = 0 ... }，并且匿名函数内部引用着fn里的变量num，所以变量num无法被销毁，而变量n是每次被调用时新创建的，所以每次fn1执行完后它就把属于自己的变量连同自己一起销毁，于是乎最后就剩下孤零零的num，于是这里就产生了内存消耗的问题

// 作为参数传递
var num = 15
var fn1 = function(x) {
    if (x > num)
        console.log(x);
}

void

function(fn2) {
    var num = 100
    fn2(30)
}(fn1)