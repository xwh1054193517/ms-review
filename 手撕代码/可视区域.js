// offsetTop： 元素上外边框padding边缘到包含元素的上内边框之间的像素距离

// clientWidth: 元素内容区宽度加上左右内边距宽度， clientWidth = content + padding
// clientHeight: 元素内容区高度加上上下内边距宽度， clientHeight = content + padding

// scrollWidth和scrollHeight主要用于确定元素内容的实际大小
// scrollLeft 和 scrollTop 属性既可以确定元素当前滚动的状态， 也可以设置元素的滚动位置

// 垂直滚动scrollTop > 0 被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。
// 水平滚动scrollLeft > 0

// 公式： el.offsetTop - document.documentElement.scrollTop <= viewPortHeight

function isInViewPort(el) {
    // 兼容写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    return top <= viewPortHeight
}

// getBoundingClientRect
// 返回值是一个 DOMRect对象，拥有lef
// right是指元素右边界距窗口最左边的距离 bottom是指元素下边界距窗口最上面的距离。
//在视窗内：top>=0,left>=0,bottom<=viewportheight,right<=viewportwidth

function isInViewPort(element) {
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const {
        top,
        right,
        bottom,
        left,
    } = element.getBoundingClientRect();

    return (
        top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
    )
}


// Intersection Observer 即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比getBoundingClientRect会好很多
// 使用步骤主要分为两步：创建观察者和传入被观察者
const options = {
    // 表示重叠面积占被观察者的比例，从 0 - 1 取值，
    // 1 表示完全被包含
    threshold: 1.0,
    root: document.querySelectorAll('#scrollArea') // 必须是目标元素的父级元素
}
const callback = (entries, observer) => {
    entries.forEach(entry => {
        entry.time; // 触发的时间
        entry.rootBounds; // 根元素的位置矩形，这种情况下为视窗位置
        entry.boundingClientRect; // 被观察者的位置举行
        entry.intersectionRect; // 重叠区域的位置矩形
        entry.intersectionRatio; // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
        entry.target; // 被观察者
    });
}
const observer = new IntersectionObserver(callback, options);