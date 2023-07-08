// 单例模式（Singleton Pattern）：创建型模式，提供了一种创建对象的最佳方式，这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建
let SingleTon1 = function (name) {
  this.name = name
  this.instance = null
}
SingleTon1.prototype.getName = function () {
  console.log(this.name);
}
SingleTon1.getInstance = function (name) {
  if (this.instance) return this.instance
  return this.instance = new SingleTon1(name)
}


//闭包
let createSingleTon=(function(){
  let instance=null
  return function(name){
    this.name=name;
    if(instance){
      return instance
    }
    return instance=this
  }
})


class SingletonApple {
  constructor(name, creator, products) {
    //首次使用构造器实例
    if (!SingletonApple.instance) {
      this.name = name;
      this.creator = creator;
      this.products = products;
      //将this挂载到SingletonApple这个类的instance属性上
      SingletonApple.instance = this;
    }
    return SingletonApple.instance;
  }
}



class Singleton {
  constructor(name, creator, products) {
    this.name = name;
    this.creator = creator;
    this.products = products;
  }
  //静态方法
  static getInstance(name, creator, products) {
    if (!this.instance) {
      this.instance = new Singleton(name, creator, products);
    }
    return this.instance;
  }
}