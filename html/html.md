# 1. src和href的区别
>都是用来引用外部资源
* src：表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
* href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。


# 2. 对HTML语义化的理解
>根据内容的结构化，选择合适的标签 
>正确的标签做正确的事
>利于Seo ,对开发者友好
```
<header></header>  头部
<nav></nav>  导航栏
<section></section>  区块（有语义化的div）
<main></main>  主要区域
<article></article>  主要内容
<aside></aside>  侧边栏
<footer></footer>  底部
<strong>

```

# 3. DOCTYPE(⽂档类型) 的作⽤
>告诉浏览器的解析器用什么标准解析这个文档
* 标准模式：最高标准
* 兼容模式，以宽松的方式向后兼容
  
## HTML5 为什么只需要写 < !DOCTYPE HTML> ？
>HTML5不基于SGML 标准通用语言标记，不需要对DTD（文档类型定义）进行引用，而HTML4.01基于SGML


# 4. script标签中defer和async的区别
>没有属性，浏览器会立即下载并执行脚本，会阻塞后续文档加载
>defer:加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。会按照顺序执行所有script
>async:后续文档的加载和执行与js脚本的加载和执行使并行的，顺序乱序

# 5. 常⽤的meta标签有哪些(name属性和http-equiv)
* charset编码类型
* keywords页面关键词
* description页面描述
* refresh（http-equiv)页面重定向和刷新
* viewport适配移动端
  * widthwidth viewport ：宽度(数值/device-width)
  * height viewport ：高度(数值/device-height)
  * initial-scale ：初始缩放比例
  * maximum-scale ：最大缩放比例
  * minimum-scale ：最小缩放比例
  * user-scalable ：是否允许用户缩放(yes/no)
* robots搜索引擎方式:all none index follow noindex nofollow

# 6. HTML5有哪些更新
>语义化标签
>媒体标签
  * audio：
  ```
  <audio src='' controls autoplay loop='true'></audio>
  ```
  * video
  ```
  <video src='' poster='imgs/aa.jpg' controls></video>
  //指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过poster也可以自己指定。
  也可以用source指定视频源
  ```
>表单：email,url,number,search,range,color,time,data,dataime,datatime-local week,month,placeholder,autofocus,autocomplete,required,pattern,multiple,form,oninput,oninvalid
>进度条
>DOM查询操作:document.querySelector,document.querySlectorAll
>Web存储:localstorage,sessionstorage
>其他:canvas,webworker,websocket,geolocation,svg,draggable

# 7. img的srcset属性的作⽤？
>srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片
```
<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />
```

# 8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
行内：a ,b,span,img,input,select,strong
块级：div ul ol li dl dt dd h1-h6 p
空元素：即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签 br,hr,img,input,link,meta,
行内块：img、input、select、textarea、button

# 9. 说一下 web worker
>在页面中，执行脚本会阻塞页面响应。web worker是运行在后台的js,独立于其他脚本，不会影响页面的性能,通过Postmessage传回主线程。
* 同源限制，子线程资源必须和主线程资源是同源
* dom限制，子线程不能操作dom
* 文件限制，不能打开本机（file://）文件,只能来源于网络
* 通信限制，只能使用postmessage来传输信息
* 脚本限制，不能使用alert、confirm方法

# 10. HTML5的离线储存怎么使用，它的工作原理是什么
在用户没有网络连接可以正常访问站点或者应用，有网络连接时更新用户机器上的缓存文件。

原理：基于一个新建的.appcache文件缓存机制，通过这个文件上的解析清单离线存储资源。这些资源就会像cookie一样被存储了下来

使用方法：
```
（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：
<html lang="en" manifest="index.manifest">

（2）在 cache.manifest 文件中编写需要离线存储的资源：
CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html


CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。
FALLBACK: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。
（3）在离线状态时，操作 window.applicationCache 进行离线缓存的操作。
如何更新缓存：
（1）更新 manifest 文件
（2）通过 javascript 操作
（3）清除浏览器缓存
```

# 11 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？
* 在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。
* 离线的情况下，浏览器会直接使用离线存储的资源。

# 12. title与h1的区别、b与strong的区别、i与em的区别？
* strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签而搜索引擎更侧重strong标签
* title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响
* i内容展示为斜体，em表示强调的文本

# 13. iframe 有那些优点和缺点？（包含别的页面）
>优点：可以加载速度较慢的内容（广告），可以使脚本并行下载，可以实现跨子域通信
>缺点:阻塞主页面的onload，不利于SEO搜索引擎，Iframe和主页面共享连接池，浏览器对相同域连接有限制，影响页面并行加载。（iframe src用Js动态添加）

# 14. label 的作用是什么？如何使用？
>定义表单控件关系，用户选择label,焦点自动转移到和label相关的表单控件上
```
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>

<label>Date:<input type="text" name="B"/></label>
```


# 15. Canvas和SVG的区别
>svg:可缩放矢量图形，是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
* 不依赖分辨率
* 支持事件处理
* 适用于大型渲染区域
* 复杂度高会减慢渲染过程

>canvas: Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。
* 依赖分辨率
* 不支持事件处理
* 弱的文本渲染
* 能够以png jpg保存
* 适用于图像密集型游戏

# 16. head 标签有什么作用，其中什么标签必不可少？
>标签用于定义文档的头部，它是所有头部元素的容器。 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。
>head描述了文档的各种属性和信息base,link,meta,script,style,title,title唯一必须

# 17 浏览器乱码的原因是什么？如何解决？
>原因:html和内容中的编码不同utf-8 gbk 浏览器不能自动检测网页编码，造成网页乱码。
>解决办法：进行转码

# 18. 渐进增强和优雅降级之间的区别
>渐进增强：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。
>优雅降级： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

# 19. 说一下 HTML5 drag API
* dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
* darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
* dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
* dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
* dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
* drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
* dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

# 20 为什么利用多个域名来存储网站资源会更有效 ？
* 确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他域名访问网站。
* CDN 缓存更方便。简单来说，CDN 主要用来使用户就近获取资源。
* 突破浏览器并发限制。同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻塞其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。
* Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。
* 对于 UGC 的内容和主站隔离，防止不必要的安全问题。
* 数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事. 这个可能被用的不多。


# 21 讲述你对 reflow 和 repaint 的理解。
在性能优先的前提下，性能消耗 reflow 大于 repaint。
体现：repaint 是某个 DOM 元素进行重绘；reflow 是整个页面进行重排，也就是页面所有 DOM 元素渲染。
触发repaint： color,text-align hover
触发reflow:
* width/height/border/margin/padding 
* 动画，:hover 等伪类引起的元素表现改动，display=none 等造成页面回流
* appendChild 等 DOM 元素操作
* font 类 style 的修改
* scroll 页面，这个不可避免；resize 页面，桌面版本的进行浏览器大小的缩放，移动端的话，还没玩过能拖动程序，resize 程序窗口大小的多窗口操作系统。
* 读取元素的属性



# 22 前端页面有哪三层构成，分别是什么？作用是什么？
结构层html 表示层css 行为层javascript dom
>cookie：cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
>cookie 数据始终在同源的 http 请求中携带（即使不需要），也会在浏览器和服务器间来回传递。
>sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

* cookie 数据大小不能超过 4k。
* sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

* localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
* sessionStorage 数据在当前浏览器窗口关闭后自动删除。
* cookie  设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。

# 23 如何实现浏览器内多个标签页之间的通信 ? (阿里)
* websocket sharedworker
* localstorge,cookies
* localstorge 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信；


# 24 prefetch和preload
* preload可以指明哪些资源是在当前页面加载完成后即刻需要的。
* prefetch是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度；