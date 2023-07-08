class Stack {
  constructor() {
    this.items = []
  }

  push(val) {
    this.items.push(val)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }
  
  size() {
    return this.items.length
  }
}