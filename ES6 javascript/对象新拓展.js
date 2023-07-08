// 属性的简写
// 当对象键名和值名相等，可以简写
// const baz={foo:foo}
// const baz = { foo }
// 方法也可以简写 简写不能做构造函数
const o = {
    methods() {
        return "hello"
    }
}


// 属性名表达式
// 允许字面量定义对象时，表达式放在括号里
let lastword = 'last word'
const a = {
    'first word': 'hello',
    [lastword]: 'world'
}

//super关键字
//this关键字总是指向函数所在的当前对象，super指向当前对象的原型对象
const proto = {
    foo: 'hello'
};

const obj = {
    foo: 'world',
    find() {
        return super.foo;
    }
};
Object.setPrototypeOf(obj, proto)
obj.find()

//属性的遍历
// for in循环遍历对象自身和继承的可枚举属性 不含symbol
// Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
// Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
// Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名
// Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
// 首先遍历所有数值键，按照数值升序排列
// 其次遍历所有字符串键，按照加入时间升序排列
// 最后遍历所有 Symbol 键，按照加入时间升序排

//对象的新增方法
// Object.is严格判断两个值是否相等，NAN和NAN为ture,+0不等于-0
+
0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

//Object.assign()用于对象的合并，将源对象的所有可枚举属性复制到目标对象
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2)
    // Object.assign()方法是浅拷贝，遇到同名属性会进行替换

// Object.getOwnPropertyDescriptors()
// 返回指定对象所有自身属性（非继承属性）的描述对象

// Object.setPrototypeOf()
// Object.setPrototypeOf方法用来设置一个对象的原型对象
// Object.getPrototypeOf()
// 用于读取一个对象的原型对象

const ob = Object.setPrototypeOf({}, null)
console.log(Object.getPrototypeOf(ob));


// Object.keys()
// 返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组
// Object.values()
// 返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组
// Object.entries()
// 返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组

// Object.fromEntries()
// 用于将一个键值对数组转为对象
Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
])