class Queue {
  constructor() {
    this.list = []
    this.frontIdx = 0
    this.tailIdx = 0
  }
  enqueue(item) {
    this.list[this.tailIdx++] = item
  }
  unqueue() {
    const item = this.list[this.frontIdx]
    this.frontIdx++
    return item
  }

}

// 循环列表
class CircleQueue {
  constructor(size) {
    this.size = size
    this.list = []
    this.front = 0
    this.end = 0
  }
  peek() {
    if (this.list.length === 0) {
      return -1
    } else {
      return this.list[0]
    }
  }
  rear() {
    return this.list.length ? this.list[this.list.leng - 1] : -1
  }

  enqueue(item) {
    if (this.isFull()) {
      return false
    }
    this.list[this.end] = item
    this.end = (this.end + 1) % this.size
    return true
  }

  dequeue() {
    if (this.isEmpty()) {
      return false
    }
    this.list[this.front] = null
    this.front = (this.front + 1) % this.size
    return true
  }

  isEmpty() {
    return this.front === this.end && !this.list[this.front]
  }

  isFull() {
    return this.end === this.front && this.list[this.front]
  }
}

// let c = new CircleQueue(3)
// c.enqueue(1)
// c.enqueue(2)
// c.enqueue(3)
// console.log(c);
// c.dequeue()
// console.log(c);
// c.enqueue(4)
// console.log(c);


function queueElement(element,priority){
  this.element=element
  this.priority=priority
}
//优先队列
class PriorityQueue {
  constructor() {
     this.item = []
  }
  enqueue(ele,pri){
    let quel=new queueElement(ele,pri)
    if(this.item.length==0){this.item.push(quel)}
    else{
      let flag=false
      for(let i=0;i<this.item.length;i++){
        if(quel.priority<this.item[i].priority){
          // 小的排在前面
            this.item.splice(i,0,quel)
            flag=true
            break;
        }
      }
      if(!flag){this.item.push(quel)}
    }
  }

  dequeue(){
    return  this.item.shift()
  }
  front(){
    return this.item[0]
  }

  isEmpty(){
    return this.item.length==0
  }

  size(){
    return this.item.length
  }
}

var pq = new PriorityQueue();

pq.enqueue('abc', 123);
console.log(pq.item);      
// 结果输出：[ QueueElement { element: 'abc', priority: 123 } ]
pq.enqueue('bca', 110);
pq.enqueue('asf',110)
console.log(pq.item);
// 结果输出：
/*[
QueueElement { element: 'bca', priority: 110 },
QueueElement { element: 'abc', priority: 123 }
]*/
pq.enqueue('cab', 140);
console.log(pq.item);
//结果输出：
/*[
QueueElement { element: 'bca', priority: 110 },
QueueElement { element: 'abc', priority: 123 },
QueueElement { element: 'cab', priority: 140 }
]*/
console.log(pq.dequeue());
