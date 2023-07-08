# 1 说说你对盒子模型的理解?
>当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）

## 四部分组成content、padding、border、margin
>标准盒子模型W3C:box-sizing:content-box
盒子总宽度 = width + padding + border + margin;
盒子总高度 = height + padding + border + margin
width/height只是内容高度，不含padding和border


>IE怪异盒子模型:box-sizing:border-box
盒子总宽度 = width + margin;
盒子总高度 = height + margin;
width/height 包含了 padding和 border值


# 2 选择器
>id选择器（#box），选择id为box的元素
>类选择器（.one），选择类名为one的所有元素
>标签选择器（div），选择标签为div的所有元素
>后代选择器（#box div），选择id为box元素内部所有的div元素
>子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
>相邻同胞选择器（.one+.two），选择所有紧接在.one之后的.two元素  相邻兄弟选择器（+）可选择紧接在另一个元素后的元素 
>兄弟选择器(.one~.two),选择位于.one的后面的所有.two
>群组选择器（div,p），选择div、p的所有元素
>伪类选择器
  :link ：选择未被访问的链接
  :visited：选取已被访问的链接
  :active：选择活动链接
  :hover ：鼠标指针浮动在上面的元素
  :focus ：选择具有焦点的
  :first-child：父元素的首个子元素
  :first-of-type 表示一组同级元素中其类型的第一个元素
  :last-of-type 表示一组同级元素中其类型的最后一个元素
  :only-of-type 表示没有同类型兄弟元素的元素
  :only-child 表示没有任何兄弟的元素
  :nth-child(n) 根据元素在一组同级中的位置匹配元素
  :nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
  :last-child 表示一组兄弟元素中的最后一个元素
  :root 设置HTML文档
  :empty 指定空的元素
  :enabled 选择可用元素
  :disabled 选择被禁用元素
  :checked 选择选中的元素
  :not(selector) 选择与 <selector> 不匹配的所有元素
>伪元素选择器
  :first-letter ：用于选取指定选择器的首字母
  :first-line ：选取指定选择器的首行
  :before : 选择器在被选元素的内容前面插入内容
  :after : 选择器在被选元素的内容后面插入内容
>属性选择器
伪类：用于已有元素处于某种状态时为其添加对应的样式
伪元素：用于创建一些不在DOM树中的元素，并为其添加样式

## 优先级
内联>ID>类>标签
>优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：
>如果存在内联样式，那么 A = 1, 否则 A = 0
>B的值等于 ID选择器出现的次数
>C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数
>D 的值等于 标签选择器 和 伪元素 出现的总次数

# 3 说说em/px/rem/vh/vw区别?
>px 绝对单位 表示像素 呈现在我们显示器上的一个个小点，每个像素点都是大小等同，移动端存在设备像素比
>em 相对长度单位，相对当前对象内文本的字体尺寸，浏览器默认1em=16px
>rem 相对HTML根元素font-size的值
>vh、vw 视口宽度，高度分为100等份,100vw和100vh为满 在桌面端，指的是浏览器的可视区域
移动端指的就是布局视口

>百分比宽% 相对于父元素：对于普通定位就是父元素，absolute定位相对已经定位的父元素。fix相对Viewport

# 4 css中，有哪些方式可以隐藏页面元素？区别?
>display:none 页面中不存在，会触发重排重绘，自身绑定事件不触发，transition不支持，被遮挡元素可以触发事件
>visibility：hidden 页面中存在，不触发重排，触发重绘，自身绑定事件不触发，transition支持，被遮挡元素可以触发事件
>opacity:0 页面中存在，不触发重排，不一定重绘（C3动画），自身绑定事件可触发，transition支持，被遮挡元素可以触发事件
>height width属性为0 不可见不占据空间 无法响应点击事件
>absolute布局移出可视区域，不可见不影响页面布局
>clip-path裁剪：不可见，占据页面空间，无法点击事件


# 5 谈谈你对BFC的理解？
>Block Formatting Context 块级格式化上下文，页面中的一块渲染区域，有属于自己的渲染规则
规则：
内部盒子在垂直方向一个接一个
同一个BFC相邻两个盒子的margin会发生重叠
BFC的区域不会与Float的元素区域重叠
每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
计算BFC高度，浮动子元素也会参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

BFC的目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部

## 触发条件
>根元素html
>浮动元素的float为Left或者right
>overflow不为visible
>display的值为inline-block inltable-cell table-caption table inline-table flex inline-flex grid inline-grid
>position为absolute fixed

## 应用场景
防止margin重叠 塌陷
清除内部浮动
自适应多栏布局


# 6 元素水平垂直居中的方法有哪些？如果元素不定宽高呢？
>定位+margin:auto:子绝父相，left right top bottom设置为0
>margin负值+定位：子绝父相，子元素移动自身50%
>定位+transform:子绝父相，translate(-50%,-50%)
>table布局：父元素display:table-cell 子元素display:inline-block 利用vertical和text-align
>flex布局：display:flex justify-content:center align-items:center
>grid布局：display:grid justify-content:center align-items:center

# 7 如何实现两栏布局 三栏布局
>两栏布局：将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满
* 使用float左浮动左边栏
* 右边使用margin-left撑出内容块
* 为父级添加BFC，防止下方元素飞到上方

* 使用flex弹性布局
* 父级flex,左边定宽，右边flex:1自适应
* flex容器的一个默认属性值:align-items: stretch;这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: align-items: flex-start

>三栏布局：左中右的顺序进行排列，通常中间列最宽，左右两列次之
* 两边使用float,中间使用margin：左右两边固定宽度，浮动，中间用margin控制边距（响应式差）
* 两边使用absolute，中间使用margin
* 两边使用float和负margin
  >中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示
  >左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧
  >右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧
* 使用display:table来实现
  >层通过 display: table设置为表格，设置 table-layout: fixed`表示列宽自身宽度决定，而不是自动计算。
  >内层的左中右通过 display: table-cell设置为表格单元。
  >左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度
* 使用flex弹性布局实现
  >仅需将容器设置为display:flex;，
  >盒内元素两端对其，将中间元素设置为100%宽度，或者设为flex:1，即可填充空白
  >盒内元素的高度撑开容器的高度
* Grid网格布局


# 8 说说flexbox（弹性盒布局模型）,以及适用场景？
>弹性布局 简便 完整 响应式 container item 主轴，纵轴
>flex-direction主轴方向 row column row-reverse column-reverse
>flex-wrap 换行 wrap nowrap wrap-reverse
>flex-flow上面两个属性的缩写
>justify-content主轴上的对齐方式flex-start flex-end center space-between space-around
>align-item在纵轴上的对齐方式flex-start flex-end cneter baseline stretch占满整个高度
>align-content 定义多根轴线对齐方式
>order定义Item的排列顺序 值越小排越前
>flex-grow 定义项目放大比例，0为不放大，1为放大站分数
>flex-shrink 定义项目缩小比例
>flex-basis:元素在主轴上的初始宽度属性
>flex是grow shrink basis的缩写
>align-self覆盖align-items允许单个与其他不同

# 9 介绍一下grid网格布局
>行，列
>grid-template-column列宽，grid-template-rows行高
>grid-row-gap行距，grid-column-gap列宽
>grid-template-ares定义区域
>grid-auto-flow顺序 先行后列 column先列后行
>justify-content align-content place-content简写
>grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性 网格线起始与终点
>ie10以下不兼容，两栏 三栏布局 手机端不友好


# 10 C3新特性
>属性选择器，伪类选择器
>边框 ，border-radius圆角  box-shadow阴影 border-image用图片绘制边框
>背景background-clip从哪个区域开始:border padding content no-cilp
background-orgin与盒子的哪个角对齐 background-size contain cover background-break
>文字text-overflow:clip修剪文本 ellipsis省略号 text-shadow text-decoreation
>颜色 rgba颜色+透明度 hsla 色相 饱和度 亮度 透明度
>transition过度  CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
>transform转换 transform-orgin围绕点进行转换 translate位移 scale缩放 rotate旋转 skew倾斜
>animation动画
>渐变 linear-gradient线性 方向 颜色 radial-gradient径向简便

# 11 C3动画有哪些
>transition实现渐变动画 property需要变化的CSS属性 duration过度时间 timing-function速度曲线 delay延迟触发事件
>transform转变动画 translate位移 scale缩放 rotate旋转 skew倾斜 transfrom不支持inline元素，要先转换为Block
>animation自定义动画 @keyframes定义关键帧 from to  0% 25% 50% 100%


# 12 怎么理解回流跟重绘？什么场景下会触发？
>回流（重排）：布局引擎会根据样式计算每个盒子在页面上的大小与位置
>重绘：当计算好盒模型的位置大小以及其他属性后，浏览器会根据每个盒子特性进行绘制

>浏览器解析渲染机制：
  解析HTML，生成DOM树，解析CSS，生成CSSOM树
  将DOM树和CSSOM树结合，生成渲染树Render Tree
  根据渲染树回流，得到节点的几何信息（位置，大小）
  根据渲染树和几何信息，得到节点的绝对像素
  将像素发送给GPU，显示在页面数

>触发
  回流：页面布局和几何信息发生变化
  * 添加删除可见DOM元素
  * 元素位置，尺寸（外边距，内边距，边框，高度宽度变化）
  * 内容发生变化，文本图片被另一个尺寸代替
  * 页面一开始渲染（无法避免）
  * 浏览器窗口尺寸变化
  * 获取Offsettop,offsetleft,scrolltop,scrollleft,clientleft等都需要通过计算得到，获取这些值会回流
  
  重绘：回流一定重绘，重绘不一定回流
  * 颜色 背景色
  * 文本方向
  * 阴影

>浏览器优化机制：会将修改操作放入队列，一段时间或者超过阈值才会清空队列，而获取布局信息会强制刷新队列

>减少回流重绘：
  * 通过改变类名设定样式 类名合并样式classlist
  * 避免设置多项内联样式
  * 动画使用fixed和absolute定位，脱离文档流减少对其他元素影响
  * 避免使用table布局，一点改变就会改变布局
  * 用C3硬件加速，transfrom opacity fliters不会引起回流重绘
  * 避免使用CSS的js表达式
  * 动态插入节点用DocumentFragment创建后一次插入
  * 获取布局信息的时候缓存起来
  * 离线操作，display:none 页面上去掉再进行操作

# 13 什么是响应式设计？响应式设计的基本原理是什么？如何做？
>页面的设计与开发与用户行为以及设备环境进行响应和调整 适配PC 移动 通过媒体查询屏幕尺寸，所以meta得声明viewport

>实现方式：
  * 媒体查询@media
  * 百分比单位
    * width、height依赖于父元素的宽高
    * 子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度
    * 子元素的padding和margin如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width
    * border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度
  * VW VH
  * REM

# 14 如果要做优化，CSS提高性能的方法有哪些？
* 内联首屏关键CSS:不需要下载CSS文件，但较大的CSS代码会造成堵塞
* 异步加载CSS：CSS会阻塞渲染，可以用js将link标签插到head后
* 资源压缩：模块化工具压缩
* 合理使用选择器：id不嵌套，嵌套不三层，通配符和属性不用
* 减少使用昂贵属性：在页面发生重绘的时候，昂贵属性如box-shadow/border-radius/filter/透明度/:nth-child等，会降低浏览器的渲染性能
* 不用@import
* 继承属性不重写
* cssSprite精灵图
* 小的icon图片转成base64编码
  

# 15 如何实现单行／多行文本溢出的省略样式？
* 单行 text-overflow:ellipsis white-space:nowrap overflow:hidden
* 多行 
  * 高度截断
  * 行数截断
    * -webkit-line-clamp: 2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）
    * display: -webkit-box：和1结合使用，将对象作为弹性伸缩盒子模型显示
    * -webkit-box-orient: vertical：和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式
    * overflow: hidden：文本溢出限定的宽度就隐藏内容
    * text-overflow: ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本


# 16  CSS如何画一个三角形？原理是什么？
>svg
>css

# 17 让Chrome支持小于12px 的文字方式有哪些？
* zoom变焦 zoom:50% 或者0.5缩小到原来的一般，兼容问题，触发重排
* -webkit-transform:scale只对可定义宽高生效，不触发重排
* -webkiet-text-size-adjust根据设备自动调整大小percentage auto none 27后只对英文数字有效

# 18 如何使用css完成视差滚动效果?
>视差滚动是指多层北京以不同速度移动，形成立体的运动效果，带来出色的视觉体验 背景层 内容层 悬浮层

>实现方式
* background-attachment:fixed 让背景相对于视口固定，元素滚动而北京不滚动
* transform:translate3D:
  * 容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，
  * 子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样
  * 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果


# 19 说说对Css预编语言的理解？有哪些区别?
>扩充了 Css 语言，增加了诸如变量、混合（mixin）、函数等功能，让 Css 更易维护、方便。本质上，预处理是Css的超集。包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 Css 文件

* sass(scss)
* less
* stylus



# 20 清除浮动
* 在浮动元素后添加一个空标签设置clear:both 兼容所有浏览器
* 父级添加overflow 触发BFC清楚浮动
* after伪元素：
  父级
  ```
    .clearfix{
      zoom:1
    }
    .clearfix:after{
      content:""
      display:block
      height:0
      clear:both
      visibility:hidden
    }
  ```
* 双伪元素
  ```
    .clearfix{
      zoom:1
    }
    .clearfix:after{
      clear:both
    }
    .clearfix:before,.clearfix:after{
      content:""
      display:table
    }
  ```