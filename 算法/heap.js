// 最小堆
class minHeap {
  constructor() {
    this.heap = []
  }
  getParentIdx(i) {
    return (i - 1) >> 1
  }
  getLeftIdx(i) {
    return i * 2 + 1
  }
  getRightIdx(i) {
    return i * 2 + 2
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }

  shiftUp(index) {
    if (index === 0) return
    const parentIdx = this.getParentIdx(index)
    if (this.heap[parentIdx] > this.heap[index]) {
      this.swap(parentIdx, index)
      this.shiftUp(parentIdx)
    }
  }
  //删除都是堆顶 但不是删除是替换
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  shiftDown(index) {
    const leftIdx = this.getLeftIdx(index)
    const rightIdx = this.getRightIdx(index)
    if (this.heap[leftIdx] < this.heap[index]) {
      this.swap(leftIdx, index)
      this.shiftDown(leftIdx)
    }
    if (this.heap[rightIdx] < this.heap[index]) {
      this.swap(rightIdx, index)
      this.shiftDown(rightIdx)
    }
  }
}