  //创建一个Father类
  class Father{
    //利用constructor来创建属性
  	constructor(name,age){
      		this.name=name
  			this.age=age
    }
    //方法在外边直接定义
    Sing(){
      console.log('I can sing')
    } 
}

//创建一个Son类，这个类继承Father的属性并且还拥有自己的属性
//ES6使用extends来继承
class Son extends Father{
  	constructor(name,age,grades){
      //注意：super是用来调用构造函数的，必须放在最前面
      // super(name,age)
      //将自己的属性写在后面
      this.grades=grades
      super(name,age)  
    }
  	Sing(){
      //使用super来调用父类方法
      // super.Sing() //父类的方法
      console.log('I can sing too') //自己的方法
      //注意：当自己有同名方法时，会先调用自己的方法，如果继承了父类方法
      //也会调用父类方法遵循就近原则
    }	 	
}
//实例化对象
var son=new Son('小明',4,80)
console.log(son)