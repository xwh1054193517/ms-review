// 参数默认值
// 函数的形参是默认声明的，不能使用let或const再次声明

function a(x, y = 'world') {
    console.log(x, y);
}

a('hello')
a('hello', '')

function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}

foo({}) // undefined 5
foo({ x: 1 }) // 1 5
foo({ x: 1, y: 2 }) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
    // 参数默认值应该是函数的尾参数，如果不是非尾部的参数设置默认值，实际上这个参数是没发省略的

// length返回没有指定默认值的参数个数
console.log((function(a, b, c = 5) {}).length) // 2
    // rest 参数也不会计入length属性
console.log((function(...args) {}).length) // 0
    // 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
console.log((function(a, b = 1, c) {}).length) // 1

// name属性
// 返回该函数的函数名
var f = function() {}
f.name

    (new Function).name // "anonymous"

// bind返回的函数，name属性值会加上bound前缀
function foo() {};
foo.bind({}).name // "bound foo"

    (function() {}).bind({}).name // "bound "


// // 箭头函数
// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
// 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
// 不可以使用yield命令，因此箭头函数不能用作 Generator 函数
// #参考文献