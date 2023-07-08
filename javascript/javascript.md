# 1.js的数据类型有哪些
>基本数据类型 number string boolean null undefined symbol bigint
>引用数据类型 object array date function Regexp

>基本数据类型存放在栈中，存放的是数值本身
>引用数据类型存放在堆中，存放的是数据的引用地址，指向对应的数据

# 2.为什么0.1+0.2>0.3
>因为在js底层，每个变量都是二进制表示，64位，第一位是符号位，后11位指数位，后52位尾数位，0.1和0.2二进制是无限循环小数，所以会截取，就不是本身的0.1和0.2的值比原来大一点
>解决办法：放大相应倍数在除

# 3.数据类型判断方式
>typeof typeof null的值为Object
>instanceof 判断对象是否在目标的原型链上
>constructor
>object.prototype.toString.call
>array.prototype.toString.call对undefined和null报错

# 4 instanceof原理
>实际上就是查找目标对象的原型链

# 5 原型和原型链！！！
>构造函数是一个普通的函数，创建方式和普通函数没什么区别，调用需要用new关键字来调用

### 原型
>js的每个函数在创建的时候，都会生成一个prototype属性，这个属性（指针）指向一个对象，这个对象就是该函数的原型对象，而原型对象中有个叫constructor的属性，指向了该函数

### 原型的作用
>包含了特定类型的所有实例可以共享的属性和方法，实例上没有的属性和方法回去原型上去找

### 原型链
>每个通过构造函数创建出来的实例对象，其本身有个属性__proto__隐式原型，会指向该实例对象的构造函数的原型对象prototype
>当访问一个对象的属性和方法事，会在这个对象本身属性上查找，没找到就会通过__proto__找到它构造函数的原型对象，还没找到就会在构造函数的prototype的__proto__去找，一层层想上找，形成链式结构，成为原型链

### 原型链的尽头
>所有的原型对象的__proto__属性都是指向function Object的原型属性，而它不存在__proto__,所以尽头是null


# 6 为什么 typeof null是Object
>在js中，不同的对象都是用二进制存储的，如果前三位都是0，系统判断为对象，而null的二进制全是0，所以是对象
>>000 对象， 1 整形， 010 双精度类型， 100 字符串 110 布尔类型

# 7 ==和===有什么区别
> ===是严格意义上的相等，会判断两边的数据类型和值大小
> null===null undefined===undefined
> ==值先检查数据类型，不同就转化类型在判断，实则只判断数值
> NaN===NaN为false，永远记住，NaN只能用isNaN来判断


# 8 手撕call,apply,bind
>改变函数执行的上下文，就是改变函数的this指向
>apply:第一个参数为this指向，第二个为函数的参数***数组*** 改变this指向后原函数会立即执行，且此方法只是***临时改变this指向一次***
>call：第一个参数为this指向，第二个为函数的参数***列表*** 改变this指向后原函数会立即执行，且此方法只是***临时改变this指向一次***
>bind：bind方法和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以***分多次传入***)

改变this指向后不会立即执行，而是返回一个***永久改变this指向的函数***

### 函数柯里化
>一个函数接收函数A作为参数，运行后能够返回一个新的函数，并且新函数能够处理函数A的剩余参数

# 9.字面量创建对象和new创建对象有什么区别，new内部都实现了什么，手写一个new
>字面量：创建简单方便阅读，不需要作用域解析，速度快
>创建对象new:创建了一个新对象，使新对象的__proto__指向原函数的prototype,改变this指向新的obj并执行该函数，执行结果保存起来作为result,判断执行函数的结果是不是null或Undefined，如果是则返回之前的新对象，如果不是则返回result


# 10 什么是作用域，什么是作用域链
>规定变量和函数的可使用范围称作作用域
>每个函数都有一个作用域链，查找变量或者函数时，需要从局部作用域到全局作用域依次查找，这些作用域的集合叫作用域链

>全局作用域:任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问
>函数作用域:函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问
>块级作用域:ES6引入了let和const关键字,和var关键字不同，在大括号中使用let和const声明的变量存在于块级作用域中。在大括号之外不能访问这些变量

# 11什么是执行栈，什么是执行上下文
>全局执行上下文：创建一个全局的windows对象，并规定this指向windoes,执行js时压入栈底，关闭浏览器时弹出
>函数执行上下文:每次函数调用都会创建一个函数执行上下文，分为创建阶段和执行阶段。
>创建阶段：函数环境会创建变量对象，arguments对象并赋值,函数声明并赋值，变量声明不赋值，函数表达式声明不赋值，确定This指向和作用域
>执行阶段：变量赋值，函数表达式赋值，使变量对象编程活跃对象
>eval执行上下文:使用eval()函数时，eval代码被编译并且创建执行上下文

>执行栈：先进先出，当进入一个执行环境，就会创建出它的执行上下文，然后进行压栈，当程序执行完成时，它的执行上下文就会被销毁，进行弹栈。栈底永远是全局环境的执行上下文，栈顶永远是正在执行函数的执行上下文，只有浏览器关闭的时候全局执行上下文才会弹出

# 12 闭包 ！！！

>什么是闭包？——一个函数和它的周围状态的引用捆绑在一起的组合(本质就是在一个函数内创建另一个函数-函数嵌套函数)
>作用：
1. 可以在函数的外部访问函数内部的局部变量,  
2. 让这些变量始终保存在内存中，不会随着函数的结束而自动销毁
3. 保护函数内的变量安全防止变量流入其他环境发生命名冲突  
4. 在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）  
5. 匿名自执行函数可以减少内存消耗 
### 会出现内存泄漏


# 13 继承
  <!-- 继承可以使得子类具有父类别的各种属性和方法 -->

>原型链继承:每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，实例包含一个原型对象的指针
>构造函数继承：借用call调用父类函数
>组合继承:call和原型链合起来
>原型式继承：Object.create
>寄生式继承:原型继承上增加方法
>寄生组合式继承：最优
>ES6 extends(super)=寄生组合式

# 14 内存泄漏 垃圾回收机制

>内存泄漏？->不再用的内存没有被及时释放出来，导致该段内存无法被使用。
>为什么会导致？->无法再通过js访问某个对象，然而垃圾回收机制认为该对象还在被引用，因此垃圾回收机制不会释放该对象导致该块内存永远无法释放。

>垃圾回收机制策略：
1. 标记清除：变量进入执行环境时，标记为"进入环境",进入环境后的变量所占用的内存不能释放，变量离开环境时标记为"离开环境"。回收机制运行，会标记内存中存储的所有变量，然后会将所有再上下文中的变量，以及被在上下文中的变量引用的变量的标记全部去掉，剩下就是待删除的，销毁所有带标记的并收回内存。
2. 引用计数：一张表，保存了内存里所有资源的引用次数，如果为0，表示这个值不在用到，可以将这块内存释放。设为null接触引用。（两个对象循环引用的时候，引用计数无计可施）

>内存泄漏：
* 意外全局变量 
* 定时器忘了置空内存泄漏 
* 闭包维护函数内局部变量  
* 没有清理对DOM元素的引用


# 15 深拷贝与浅拷贝
>浅拷贝:创建新的数据,这个数据有原始数据属性的一份精确拷贝,基本类型拷贝值,引用类型拷贝地址,***共享内存地址会发生改版***

>深拷贝:开辟一个新的栈,两个对象属性完全相同,但是对应两个不同的地址,修改一个对象的函数不会改变另一个

# 16 说说事件循环的理解
>javscript是单线程，同一时间内只能做一件事，实现单线程非阻塞的方法就是事件循环
>同步任务：立即执行的任务，放在主线程执行Promise
>异步任务；异步执行的任务，如ajax settimeout

>同步和异步任务分别进入不同的地方，同步进入主线程，一部进入Event Table并注册函数，当指定事情完成时，Event Table会把函数移入Event Queue,等待主线程任务执行完毕，会从Event Queue中读取函数，放入主线程执行。重复以上过程就是事件循环

## 异步任务 又分 宏任务和微任务
>微任务 
* Promise.then 
* MutationObserver
* Object.observe(proxy代替)
* process.nextTick(Node.js)
***宏任务结束，开启下一个宏任务时要清空微任务***
>宏任务
* script
* settimtout/setinterval
* Ui事件
* postMessage
* setimmediate

>流程：执行一个宏任务，遇到微任务把它放进微任务的队列，当当前宏任务执行完时，查看微任务的事件队列，执行，然后清空微任务队列

# async和await
>async声明一个异步方法，await等待异步方法的执行

>async返回一个promise对象
>await后面是一个promise对象，返回对象的结果，如果不是promise对象，返回对应的值，会阻塞后面的代码(即放入了微队列)

# 16 类型转换机制
>只有到运行期间才会确定类型
>显式转换:Number(),parseInt(),String(),Boolean()
>隐式转换:
1. 比较运算（==、！=、>、<)、if、while
2. 算术运算（+,-,*,/,%)  

# 17 数组常用方法
>增:push,unshift,splice,concat
>删:pop,shift,splice,slice
>改:splice
>查:indexOf,includes,find
>排序：reverse,sort
>转换:join
>迭代：some,every,forEach,filter,map

# 18 字符串常见办法
>增:concat
>删:slice,substr,substring
>改:trim,trimLeft,trimRight,repeat,padStart,padEnd,toLowerCase,toUpperCase
>查:chatAt,indexOf,startWidth,includes
>转换:split
>模板匹配:match,search,replace

# 19 this对象的理解
>this关键字时函数运行时自动生成的一个内部对象，只能在函数内部使用，总是指向调用它的对象
>默认绑定（window)
>隐式绑定（对象内）
>new绑定
>显示绑定（call,apply,bind)
***this***箭头函数没有，看上下文

# 20 说说javascript的事件模型
>事件，在Html文档或者浏览器中发生一种交互操作，使得网页具备互动性。如加载事件，鼠标事件，自定义事件。
>DOM是一个树结构，在父子节点绑定事件，当触发子节点，存在一个顺序问题——事件流

>事件流三个阶段
* 事件捕获capture 从上往下（父到子）
* 处于目标target
* 事件冒泡bubbling 从下往上（子到父）
1. stopPropagation() 会阻止事件捕获和事件冒泡，但是无法阻止标签的默认行为
2. event.preventDefault();阻止默认操作


>事件模型
1. 原始事件模型（html绑定如onclick,js绑定）——速度快，跨浏览器 可能未加载出来，只支持冒泡，同一类型事件只能绑定一次
  
2. 标准事件模型 (可以在一个DOM元素绑定多个事件处理器)
>捕获阶段:事件从document一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
>冒泡阶段:事件到达目标事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

***addEventListener(eventType,handler,useCaptrue)***
***removeEventListener(eventType, handler, useCapture)***
* eventType指定事件类型(不要加on)
* handler是事件处理函数
* useCapture是一个boolean用于指定是否在捕获阶段进行处理，一般设置为false与IE浏览器保持一致

3. IE事件模型
>事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。
>事件冒泡阶段：事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

attachEvent(eventType, handler)
detachEvent(eventType, handler)

# 21 谈谈事件代理，应用场景
>通俗来讲，就是把一个元素响应事件的函数委托到另一个元素
>事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层的元素上，真正绑定事件的是外层元素，而不是目标元素。当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数

>应用场景：点击列表响应一个事件，绑在列表上消耗内存，可以绑在父元素ul上，再去匹配目标元素

>总结：
* 适合事件委托：click,mousedown,mouseup,keydown,keyup,keypress
* 减少页面所需内存，提升性能
* 动态绑定，减少重复工作

* focus、blur这些事件没有事件冒泡机制，所以无法进行委托绑定事件
* mousemove、mouseout这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的

# 22 ajax原理是什么，如何实现？
>ajax全称async javascript and XML——异步的javascript和XML,是一种创建交互式网页应用的网页开发技术，可以在不重新加载整个网页的情况下与服务器交换数据，更新部分网页

>ajax原理：通过XmlHttpRequest对象向服务器发送异步请求，从服务器获得数据，然后用js操作DOM进行更新
>具体实现：
* 创建XMLHttpRequest对象
* 通过Open()建立连接
* Send发送请求所需数据
* onreadystatechange监听服务端通信状态
* 接受处理服务端向客户端响应的数据
* 更新到Html页面中

# 23 常见的DOM操作
>创建节点:
* createElement
* createTextNode
* createDocumentFragment
***用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到DOM中***

***当请求把一个DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment自身，而是它的所有子孙节点***

* createAttribute
>查询节点
* querySelector
* querySelectorAll
>更新节点
* innerHTML
* innerText、textContent
* style
>添加节点
* appendChild
* insertBefore
* setAttribute
>删除节点
* removeChild
***删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉***


# 24 说说对BOM的理解，常见的BOM对象
>BOM(Browser Object Model)浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象

>核心对象window,浏览器窗口，全局作用域的变量都会变成window下的。
* moveBy,moveTo,resizeTo,resizeBy,scrollTo,scrollBy,open,close

>location对象
* 除了 hash之外，只要修改location的一个属性，就会导致页面 重新加载新URL
* location.reload()，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载
* 如果要强制从服务器中重新加载，传递一个参数true即可

>navigator对象用来获取浏览器的属性，区分浏览器类型

>screen对象保存客户端能力信息，也就是浏览器窗口外的客户端显示其信息

>histoy对象主要用来操作浏览器URL的历史记录
* go(url)
* forward向前
* back向后

# 25 尾递归
>在尾部调用函数自身，可通过优化使得计算仅占用常量栈空间
* 每一次返回的就是一个新的函数，不带上一个函数的参数，也就不需要储存上一个函数了。尾递归只需要保存一个调用栈，复杂度 O(1)


# 26 本地存储的方式
>cookie：（同源策略仅仅关注域名，不同端口能收到)
* 小型文本文件，指某网站为了辨别用户身份而存储在用户本地终端上的数据，为了解决HTTP无状态导致的问题。
* 能被服务器指定，浏览器自动在请求中带上
* 大小只有4KB
* 大规模应用于广告商定位用户
* 配合session也是一个可行的登录鉴权方案
  >Expires设置cookie的过期时间
  >Max-age设置Cookie失效之前需要经过的秒数（优先级最高）
  >Domain制定了Cookie可以送达的主机名
  >Path指定了一个URL路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部
  >标记为 Secure的 Cookie只应通过被HTTPS协议加密过的请求发送给服务端
  >而 HttpOnly 则用来禁止使用 JS 访问 cookie


>Web storage（配合Token可以实现更安全的登录鉴权）
* LocalStorage
  >key-value存储 10M
  >字符串存储
  >持久化本地存储
  >存储的信息在同一域中是共享的
  >只能存入字符串，无法直接存对象

* sessionStorage
  >使用方法几乎和LocalStorage一样，不同的是生命周期，页面（会话）关闭，数据会删除

* IndexedDB(API)--框架GoDB
  >储存量理论上没有上限
  >所有操作都是异步，原生支持存储JS的对象
  >以数据库形式存储数据


# 27 如何实现函数缓存
>函数缓存：将函数运算过的结果进行缓存（用空间换时间）

>实现方法
  * 闭包：函数 + 函数体内可访问的变量总和
  * 柯里化：把接受多个参数的函数转换成接受一个单一参数的函数
  * 高阶函数：通过接收其他函数作为参数或返回其他函数的函数

>适用场景
  * 对于昂贵的函数调用，执行复杂计算的函数
  * 对于具有有限且高度重复输入范围的函数
  * 对于具有重复输入值的递归函数
  * 对于纯函数，即每次使用特定输入调用时返回相同输出的函数

# 28 什么是防抖和节流？有什么区别，如何实现？
>防抖（debounce)：n秒后再执行该事件，若在N秒内重复触发，则重新计时
>节流(throttle):n秒内只运行一次，若在N秒内被重复触发， 只有一次生效

## 区别：
* 都可以用setTimeout实现
* 目的都是降低回调执行效率，节省计算资源

* 函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout和 setTimeout实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
* 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次

## 应用

* 防抖：搜索框输入，输入结束再发送请求，输入检测，窗口大小resize
* 节流：滚动加载，加载更多或者滚到底部监听；搜索框联想功能

# 29 数字精度丢失问题如何解决
>变量由二进制存储，第一位为符号位，后11位为指数位，后52位为尾数位

>解决办法：使用toPrecision并parseFloat转成数字
```
  function strip(num,precision=12){
    return parseFloat(num.toPrecision(precision))
  }

  精确加法
  function add(num1,num2){
    const num1=(num1.toString().split('.')[1]||'').length
    const num2=(num2.toString().split('.')[1]||'').length

    先放大倍数再除
    const baseNum=Math.pow(10,Math.max(num1,num2))
    return (num1*baseNum+num2*baseNum)/baseNum
  }
```

# 30 如何判断一个元素是否在可视区域中
>应用
* 图片懒加载
* 列表无限滚动
* 计算广告元素曝光情况
* 可点击链接预加载
  
>方法
* offsetTop、scrollTop
* getBoundingClientRect
* Intersection Observer


# 31 大文件上传如何做断点续传
>分片上传：将文件按照一定的大小，将整个文件分隔成多个part来进行分片上传
* 将需要上传的文件按照一定规则分割
* 初始化一个分片上传任务，返回本次分片上传唯一标识
* 按照一定策略 串行或者并行 发送各个分片数据块
* 发送完抽服务端判断上传是否完整，完整则合成得到原始文件
  
>断点续传：在上传或下载时，将任务人为划分成几个部分，每一个部分采用一个线程进行，碰到故障可以从已经上传或者下载的部分开始继续。
* 服务器端返回，告知从哪开始
* 浏览器端自行处理

#  32实现上拉刷新和下拉刷新
>上拉刷新：触底公式 scrollTop+clientHeight>=scollHeight
>下拉刷新：当页面本身置于顶部，用户下拉时需要出发的动作
* 监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；
* 监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；
* 监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置


# 33 实现单点登录
>Single Sign On简称SSO，在多个应用系统中，用户只需要登陆一次就可以访问所有互相信任的应用系统。

>原理：需要一个独立的认证中心Passport，子系统的登录均得通过passport，子系统本身将不参与登录操作。当一个系统登陆成功，passport会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，，会建立一个局部绘画，一定时间内无需再次向passport发起认证。

>实现
* 同域名下的单点登录：cookie的domain设为父域，将path设为根路径，将Session ID或者TOken保存在父域，所有子域都能访问到这个cookie
  
* 不同域名下，cookie不共享，部署一个认证中心，用于专门处理登录请求的独立web服务
  >用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 token 写入 Cookie（注意这个 Cookie是认证中心的，应用系统是访问不到的）
  >应用系统检查当前请求有没有 Token，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心
  >由于这个操作会将认证中心的 Cookie 自动带过去，因此，认证中心能够根据 Cookie 知道用户是否已经登录过了
  >如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 URL，并在跳转前生成一个 Token，拼接在目标URL 的后面，回传给目标应用系统
  >应用系统拿到 Token之后，还需要向认证中心确认下 Token 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 Token写入Cookie，然后给本次访问放行。（注意这个 Cookie 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 Token，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了


  >另一种就是将SessionID或者Token保存到浏览器的localStorage中，让前端每次给后端发送请求，都把localstorage发给服务端

```
  / 获取 token
var token = result.data.token;
 
// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML
var iframe = document.createElement("iframe");
iframe.src = "http://app1.com/localstorage.html";
document.body.append(iframe);
// 使用postMessage()方法将token传递给iframe
setTimeout(function () {
    iframe.contentWindow.postMessage(token, "http://app1.com");
}, 4000);
setTimeout(function () {
    iframe.remove();
}, 6000);
 
// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage
window.addEventListener('message', function (event) {
    localStorage.setItem('token', event.data)
}, false);
```

# 34 web常见攻击方式
>XSS（cross Site Scripting)跨站脚本攻击
* 不需要做任何登录认证，通过合法的操作（搜索）向页面注入脚本
* 存储型：攻击者将恶意代码提交到目标网站的数据库中，恶意代码拼接到HTML中，窃取数据发送到其它网站或者冒充用户行为，常见于发帖，评论
* 反射型：构建特殊URL中带有恶意代码，由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
* DOM型：URL中含恶意代码，取出执行由浏览器端执行
* 预防:编码：对用户输入的数据进行HTML Entity 编码。把字符转换成 转义字符。Encode的作用是将$var等一些字符进行转化，使得浏览器在最终输出结果上是一样的。过滤：移除用户输入的和事件相关的属性。


>CSRF(Cross-site request forgery)跨站请求伪造
* 攻击者诱导受害者进入第三方网站，第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获得的注册凭证（cookie)，绕过后台用户验证，达到冒充用户对被攻击网站执行某项操作的目的。

>预防：
* 使用验证码或者token验证，每次提交表单都要带上token验证，每次提交表单都要带上token
* 通过HOst+origin判断是否为非法用户
* 给 Cookie 设置 SameSite属性，来限制第三方 Cookie，strict
  最严格，完全禁止第三方的 cookie；但是体验不好，如果当前有一个 github 链接，点击跳转就不会携带任cookie，跳转过去一直是未登录状态的
lax
  稍微放宽了一些，大多不发送 cookie，但除了 get 请求（只包括三种情况：链接、预加载请求、get 表单）以外
none
关闭该设置

>SQL注入攻击：严格检查输入变量的类型和格式，过滤和转义特殊字符，对访问数据库的Web应用程序采用Web应用防火墙
>点击挟持：点击劫持是指利用 iframe+css 的 opacity 把危险网址设置为透明覆盖到安全的网址上面，使用户误以为在安全网址下操作。在 http 中配置 X-frame-options 设置为 deny 可以禁止被 iframe 嵌入

# 35 为什么要使用模块化？
>防止命名冲突，更好的分离，按需加载，更好的复用性，更高的维护性

## require和Import的区别
>require:运行时调用，可以放在任何地方，需要使用Module.exports或者exports=xxx,是赋值的过程
>import:编译时调用，必须放在文件开头，用export default或者export const,是解构过程

# 36 箭头函数和普通函数的区别？箭头函数可以当做构造函数 new 吗
* 箭头函数是普通函数的简写，但是它不具备很多普通函数的特性
* 箭头函数的this指向它定义时所在的对象，而不是调用它的对象
*  不会进行函数提升
* 没有arguments对象，不能使用arguments，如果要获取参数的话可以使用rest运算符
* 没有yield属性，不能作为生成器Generator使用
* 不能new
  >没有自己的this，不能调用call和apply
  >没有prototype，new关键字内部需要把新对象的_proto_指向函数的prototype

# 37 什么是requestAnimationFrame？
>requestAnimationFrame请求数据帧可以做动画执行，可以自己决定调用回调函数，能保证每次屏幕刷新只被执行一次，页面被隐藏或者最小化的时候暂停执行，返回窗口继续执行，有效节省CPU

# 38 js常见的设计模式
>单例模式:不管创建多少个对象都只有一个实例
>工厂模式:代替new创建一个对象，且这个对象想工厂制作一样，批量制作属性相同的实例对象（指向不同）
>构造函数模式:
>发布订阅者模式:
>迭代器模式:
>代理模式:


# 39 移动端300ms延迟问题
>设置meta标签 禁用缩放
>更改默认的视口宽度，设为设备宽度
>css touch-action设为none
>fastClick插件
>自己封装函数
```
function tap(obj,callback){
  var isMove=false //记录手指是否移动
  var startTime=0 //记录手指触摸的事件
obj.addEventListerner('touchstart',function(e){
		startTime = Date.now();//记录触摸时间
	})
	obj.addEventListerner('touchmove',function(e){
		isMove = true;//查看手指是否滑动
	})
	obj.addEventListerner('touchend',function(e){
		if(!isMove && (Date.now()-statrTime) < 150){
		callback && callback();
		}
		isMove = false;//取反 重置
		startTime = 0;
	})
};
tap(div,function(){ //执行代码 }；
```


# 40 localstorage怎么存储图片
>创建一个canvas对象，将图片保存在canvas中，然后将canvas对象toDataUrl，把dataurl数据存在localstorage中
>或者用blob二进制流存储，canvas对象toBlob

# 41 如何实现大文件上传
>分片，用Input接收大文件，用File.slice进行分割分块上传，制定好一个块的大小，等到所有快都上传完毕，promise.all运行成功回调

# 42 web worker是干嘛的
>Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。
>js是单线程的，而web worker可以多创建一个子线程，多出来的这个子线程执行代码时不会阻塞主线程。它有几个限制，
* 同源限制，子线程资源必须和主线程资源是同源
* dom限制，子线程不能操作dom
* 文件限制，不能打开本机（file://）文件,只能来源于网络
* 通信限制，只能使用postmessage来传输信息
* 脚本限制，不能使用alert、confirm方法

# 43 Object.keys和Object.getOwnPropertyNames有什么区别？⭐⭐⭐
>Object.keys只列出非原型上可枚举的key值，而Object.getOwnPropertyNames列出非原型上的所有key值(Symbol除外)

# 44 如何配置REM
```
(function(){
  const styleEle=document.createElement('style')
  const docWidth=document.documentElement.clientWidth
  const rootFontSize=docWidth/16

  styleEle.innerHTML='html{font-size:'+rootFontSize+'px!important}';
  document.head.appendChild(styleEle)
})()
```

# 45 clientHeight、offsetHeight、scrollHeight有什么区别
>clientHeight:用户可见内部高度+padding
>offsetHeight:总高度，算上滚动条
>scrollHeight：可滚动高度的+padding
>scrollTop:当前元素距离顶部的距离
## 触底加载 scrollTop+clientHeight>=scrollHeight-50px

# 46 setTimeout和setinterval做倒计时
>setTimeout 保证调用的时间间隔是一致的，setInterval的设定的间隔时间包括了执行回调的时间。

# 47 fetch
>fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象，而是用promise对象
* 脱离xhr,基于promise实现
* 对某些错误不会reject,状态码400，500
* 不支持超时timeout处理
* 默认不携带cookie，需要手动配置
* 无法监听请求进度

# 48 e.target和e.currentTarget的区别
>e.target是点击的那个对象，e.currentTarget是绑定该事件的对象

# 49 秒传、分片传输、断点传输
>秒传:文件上传过程中可以通过存储文件的路径和对应的MD5的摘要。如果有新文件上传，则先检查库里面有没有已经存在的MD5摘要，如果有则无需上传直接返回相同MD5摘要文件对应的路径
>分片传输：利用Blob提供的slice方法把大文件分割为一个个小文件分别传输。全部上传完成时候由服务端进行归总整合
>断点传输:在分片上传的基础上，分成一个个小文件之后，每个小文件上传完毕之后对其进行状态的存储（localStorage），如果中间发生网络断线或者刷新，下次可以接着上次的进度上传

# 50 js性能优化
>垃圾回收
>闭包中的对象清除
>防抖节流
>分批加载（setinterval，加载10000个节点)
>事件委托
>少用with
>requestAnimationFrame的使用
>script标签中的defer和async
* 没有defer或async属性，浏览器会立即加载并执行相应的脚本。不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载
* async事异步加载，表示后续文档的加载和渲染和js脚本的加载执行是同时进行
* defer跟async唯一区别，仅加载不执行，等到文档所有元素解析完DOMContentLoaded事件触发之前执行。
>CDN（内容分发网络）

#  escape encodeURI encodeURIComponent
1. 简单解释
　　简单来说，escape是对字符串(string)进行编码(而另外两种是对URL)，作用是让它们在所有电脑上可读。
　　编码之后的效果是%XX或者%uXXXX这种形式。
　　其中 ASCII字母、数字、@*/+ ，这几个字符不会被编码，其余的都会。
　　最关键的是，当你需要对URL编码时，请忘记这个方法，这个方法是针对字符串使用的，不适用于URL。

2.   encodeURI和encodeURIComponent
　　对URL编码是常见的事，所以这两个方法应该是实际中要特别注意的。
　　它们都是编码URL，唯一区别就是编码的字符范围，其中
　　encodeURI方法不会对下列字符编码 ASCII字母、数字、~!@#$&*()=:/,;?+'
　　encodeURIComponent方法不会对下列字符编码 ASCII字母、数字、~!*()'
也就是encodeURIComponent编码的范围更广，会将http://XXX中的//也编码，会导致URL不可用