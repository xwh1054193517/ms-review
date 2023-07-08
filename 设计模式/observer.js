// 观察者模式
// 观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新
// 被观察者
class Subject {
  constructor() {
    this.observerList = []
  }

  addObserver(ob) {
    this.observerList.push(ob)
  }

  removeObserver(ob) {
    const idx = this.observerList.findIndex(o => o.name === ob.name)
    this.observerList.splice(idx, 1)
  }

  notifyObservers(mes) {
    const observers = this.observerList.slice()
    observers.forEach(o => o.notified(mes))
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    if (subject) {
      subject.addObserver(this)
    }
  }
  notified(mes) {
    console.log(this.name, 'get message:', mes);
  }
}


const subject = new Subject();
const observerA = new Observer('observerA', subject);
const observerB = new Observer('observerB');
subject.addObserver(observerB);
subject.notifyObservers('Hello from subject');
subject.removeObserver(observerA);
subject.notifyObservers('Hello again');

console.log(0.);


