// 代理模式（Proxy Pattern）是为一个对象提供一个代用品或占位符，以便控制对它的访问

// 缓存代理
// 缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果
var muti = function () {
  console.log("开始计算乘积");
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};
const proxyMul=(function(){
  let cache={}
  return function(){
    let args=Array.prototype.join.call(arguments,",")
    if(args in cache){
      console.log('from cache');
      return cache[args]
    }
    console.log(args);
    return (cache[args]=muti.apply(this.arguments))
  }
})()

proxyMul(1,2,3)
proxyMul(1,2,3)

// 虚拟代理
// 虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建
let myImage = (function(){
  let imgNode = document.createElement( 'img' );
  document.body.appendChild( imgNode );

  return {
      //setSrc接口，外界调用这个接口，便可以给该img标签设置src属性
      setSrc: function( src ){
          imgNode.src = src;
      }
  }
})()

let proxyImage = (function(){
  // 创建一个Image对象，用于加载需要设置的图片
  let img = new Image;
  img.onload = function(){
      // 监听到图片加载完成后，给被代理的图片本地对象设置src为加载完成后的图片
      myImage.setSrc( this.src );
  }
  return {
      setSrc: function( src ){
          // 设置图片时，在图片未被真正加载好时，以这张图作为loading，提示用户图片正在加载
          myImage.setSrc( 'https://img.zcool.cn/community/01deed576019060000018c1bd2352d.gif' );
          img.src = src;
      }
  }
})();

// proxyImage.setSrc( 'https://xxx.jpg' );