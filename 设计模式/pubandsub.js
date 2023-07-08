// 发布订阅模式
class PubSub {
  constructor() {
    this.message = {}
    this.listeners = {}
  }

  //添加发布者
  publish(type, content) {
    const existContent = this.message[type];
    if (!existContent) {
      this.message[type] = []
    }
    this.message[type].push(content)
  }

  //添加 订阅者
  subscribe(type, cb) {
    const existListener = this.listeners[type]
    if (!existListener) {
      this.listeners[type] = []
    }
    this.listeners[type].push(cb)
  }
  unsubscribe(type, cb) {
    if (!this.listeners[type]) return
    this.listeners[type] = this.listeners[type].filter(item => item !== cb)
    if (!this.listeners[type]) delete this.listeners[type]
  }

  notify(type) {
    const message = this.message[type]
    console.log(message);
    const subscribers = this.listeners[type] || []
    subscribers.forEach((cb) => {
      message.forEach((item) => {
        cb(item)
      })
    })
  }
}

// 订阅者
class Subscriber {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
  subscribe(type, cb) {
    this.content.subscribe(type, cb)
  }
  unsubscribe(type, cb) {
    this.content.unsubscribe(type, cb)
  }
}

class Publisher {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}


const TYPE_A = 'music';
const TYPE_B = 'movie';
const TYPE_C = 'novel';

const pubsub = new PubSub();

const publisherA = new Publisher('publisherA', pubsub);
publisherA.publish(TYPE_A, 'we are young');
publisherA.publish(TYPE_B, 'the silicon valley');
const publisherB = new Publisher('publisherB', pubsub);
publisherB.publish(TYPE_A, 'stronger');
const publisherC = new Publisher('publisherC', pubsub);
publisherC.publish(TYPE_C, 'a brief history of time');
const fn = res => {
  console.log('subscriberA received', res)
}
const subscriberA = new Subscriber('subscriberA', pubsub);
subscriberA.subscribe(TYPE_A, fn);
const subscriberB = new Subscriber('subscriberB', pubsub);
subscriberB.subscribe(TYPE_C, res => {
  console.log('subscriberB received', res)
});
const subscriberC = new Subscriber('subscriberC', pubsub);
subscriberC.subscribe(TYPE_B, res => {
  console.log('subscriberC received', res)
});

console.log(pubsub.message);
pubsub.notify(TYPE_A);
pubsub.notify(TYPE_B);
pubsub.notify(TYPE_C);
subscriberA.unsubscribe(TYPE_A, fn)
pubsub.notify(TYPE_A);