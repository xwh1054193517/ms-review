# 1 说说var、let、const之间的区别
>var 声明的变量是全局对象也是顶层对象（window),存在变量提升（不赋值），能够多次声明，后面覆盖前面。函数内声明是局部的，不带var就是全局

>let 是es6新增命令，声明的变量只在所在的代码块（块级作用域)有效,不存在变量提升，在声明前变量都不可用，使用会抛出错误（暂时性死区），在相同作用域下不允许重复声明

>const 声明一个只读常量，跟let差不多，差别在于一旦声明不能更改，且声明必须立即初始化，赋值。（保证的是变量指向的内存地址保存的数据不得改动，因此复杂类型保存的是指针，指针指向的数据可以变，对象的属性可以改变）

# 2 数组新增了哪些拓展
>扩展运算符...
>构造函数新增：Array.from(),Array.of()
>实例对象新增：copyWithin,find,findIndex,fill,entires,keys,values,includes, flat,flatMap
>数组的空位，数组某一个位置没有任何值，ES6明确将空位转为Undefined
>排序稳定性：sort默认设置为稳定的排序算法

# 3 函数新拓展
>允许参数设置默认值
>属性：
* length属性返回没有指定默认值的参数个数，rest不计入,如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
* name属性返回该函数的属性名
>作用域，一定设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独作用域
>严格模式:只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
>箭头函数

# 4 对象新扩展
>属性的简写
>属性名表达式
>super关键字
>扩展运算符的应用（解构赋值必须时最后一个参数，浅拷贝)
>属性的遍历
>对象的新增方法

# 5 怎么理解Set和Map
>Set是一种叫做集合的数据结构
* 一堆无序的，相关联的，且不重复的内存结构组成的组合
* 不重复，[值，值]形式存储
>Map是一种叫做字典的数据结构
* 一些元素的集合，每个元素有一个称作key的域，不同元素的key各不相同
* [键，值]形式存储


# 6 怎么理解Promise
>异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大
* 链式操作减低了编码难度
* 代码可读性明显增强

## 状态
>三种状态，pending进行中，fulfilled已成功,rejected已失败，一旦状态改变，就不会再变

## 用法
>Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject
* resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”
* reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”
 
## 实例方法
>then，状态发生改变时的回调函数，第一个参数时resolved的回调函数，第二个是rejected的回调函数，返回一个新的promise实例
>catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
* Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
>finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

# 构造函数方法
>all:所有promise完成fulfilled才会改变状态，其中一个Reject，第一个reject会传递给回调函数
>race:有一个实例率先改变状态，状态就跟着改变,率先改变的 Promise 实例的返回值则传递给回调函数
>alSettled:只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束
>resolve：将现有对象转为 Promise对象
>reject
>try

# 7 怎么理解Generator
>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

>Generator函数：会返回一个遍历器对象，可以依次遍历Generator函数内部的每一个状态
>通过yield关键字可以暂停generator函数返回的遍历器对象的状态，通过Next方法才会遍历到下一个内部状态
* 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
* done表示该generator函数是否执行完毕

* promise和async/await是专门用于处理异步操作的

* Generator并不是为异步而设计出来的，它还有其他功能（对象* 迭代、控制输出、部署Interator接口...）
  
* promise编写代码相比Generator、async更为复杂化，且可读性* 也稍差

* Generator、async需要与promise对象搭配处理异步情况

* async实质是Generator的语法糖，相当于会自动执行Generator* 函数

* async使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案

# 8 怎么理解proxy
>用于创建一个对象的代理，从而实现基本操作的拦截和自定义（属性查找、赋值、枚举、函数调用等）

## 用法
>var proxy = new Proxy(target, handler)
* target表示所要拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至另一个代理））
* handler通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为
  >get(target,propKey,receiver)：拦截对象属性的读取
  >set(target,propKey,value,receiver)：拦截对象属性的设置
  >has(target,propKey)：拦截propKey in proxy的操作，返回一个布尔值
  >deleteProperty(target,propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
  >ownKeys(target)：拦截Object.keys(proxy)、for...in等循环，返回一个数组
  >getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
  >defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc），返回一个布尔值
  >preventExtensions(target)：拦截Object preventExtensions(proxy)，返回一个布尔值
  >getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象
  >isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值
  >setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值
  >apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
  >construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作

## Reflect
>若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是ES6中操作对象而提供的新 API
* 只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
* 修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回false）
* 让Object操作都变成函数行为

# 9 怎么理解module 模块化
>为什么
* 代码抽象
* 代码封装
* 代码复用
* 依赖管理

>3中模块化机制
* CommonJs node.js早期
  >是一套模块规范，用于服务端
  >所有代码运行在模块作用域，不会污染全局作用域
  >模块是同步加载的，即只有加载完成，才能执行后面的操作
  >模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
  >require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值

* AMD  require.js
  >异步模块定义，采用异步方式加载模块，所有依赖模块的语句都在一个回调函数中，等到模块加载完毕这个回调函数才会执行
  >依赖前置，把依赖放前面，提前执行，即使没有用到这个模块
```
  /** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
  }
});
// 执行基本操作
require(["jquery","underscore"],function($,_){
  // some code here
});
```

* CMD  sea.js
  >依赖就近，延时执行（用到的时候在声明依赖)

* ESM
>使用 export 、 export default 来导出模块，使用 import 来引入模块

* commonjs 是运行时加载 ；ESM 是编译时加载
* commonjs 是同步加载模块；ESM 是异步加载模块
* commonjs 是对值的浅拷贝；ESM 是对值的引用，而且不可修改（直接地址不可修改，类似于 const）。