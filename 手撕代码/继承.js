// 原型链继承 使用同一个原型对象，共享内存空间
// function Parent() {
//     this.name = 'parent1'
//     this.play = [1, 2, 3]
// }

// function Child() {
//     this.type = 'child2'
// }
// Child.prototype = new Parent()
// console.log(new Child())

// var s1 = new Child()
// var s2 = new Child()
// s1.play.push(4)
// console.log(s1.play, s2.play);

//原型继承 使用Object.create
// Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能
let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

// 寄生式继承能添加一些方法
// function clone(original) {
//   let clone = Object.create(original);
//   clone.getFriends = function() {
//       return this.friends;
//   };
//   return clone;
// }
let person4 = Object.create(parent4)
person4.name = "tom"
person4.friends.push('jerry')

//构造函数继承 
//只能继承父类实例属性和方法
//借用call来调用parent 不能继承原型属性和方法
function Parent() {
    this.name = 'parent1'
}

Parent.prototype.getName = function() {
    return this.name
}

function Child() {
    Parent.call(this)
    this.type = 'child'
}
let child = new Child();
console.log(child); // 没问题
// console.log(child.getName()); // 会报错

// 组合继承
// 缺点：调用了两次父类的构造函数，造成了不必要的消耗，父类方法可以复用
// 优点可传参，不共享父类引用属性
function Parent3() {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function() {
    return this.name;
}

function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

function Parent3() {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function() {
    return this.name;
}

function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}
// 第一次调用 Parent3()
Child3.prototype = new Parent()
    // 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3



// 寄生组合式继承 最优
function Father(name) {
    this.name = name
    this.hobby = ["篮球", "足球", "乒乓球"]
}

Father.prototype.getName = function() {
    console.log(this.name);
}

function Son(name, age) {
    Father.call(this, name)
    this.age = age
}

Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

var s2 = new Son('ming', 18)
console.log(s2);