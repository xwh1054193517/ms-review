function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

let arr = [1, 2, 3, 4, 5]
// 数组转链表
const array2List = function (arr) {
  if (!arr.length) return null
  let head = new ListNode(arr[0], arr[1])
  let list = head
  for (let i = 1; i < arr.length; i++) {
    list.next = new ListNode(arr[i], arr[i + 1])
    list = list.next
  }
  return head
}

let head = array2List(arr)
while (head) {
  console.log(head.val);
  head = head.next
}

//合并问题
const mergeTwoList = (l1, l2) => {
  let node = new ListNode(-1)
  let cur = node;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next
    }
  }
  cur.next = l1 !== null ? l1 : l2;
  return node.next;
}


//删除节点元素
const removeElement = (head, val) => {
  const node = new ListNode(0, head)
  let cur = node
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return node.next;
}

//链表去重
const deleteDuplicates = (head) => {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }
  return head
}

//链表 删除重复的数字
const deleteDuplicate = (head) => {
  if (!head || !head.next) {
    return head
  }
  let node = new ListNode()
  node.next = head
  let cur = node
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return node.next
}

//删除链表倒数第N个节点
const removeNthFromEnd = (head, n) => {
  let ret = new ListNode(0, head)
  let slow = fast = ret;
  while (n--) fast = fast.next;
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return ret.next
}

// 反转链表
const reverseList = (head) => {
  if (!head || !head.next) return head;
  let pre = null;
  let cur = head;
  while (cur) {
    let temp=cur.next
    cur.next = pre;
    pre = cur
    cur=temp
  }
}

//环形链表
const detectCycle = (head) => {
  if (!head || !head.next) return null; //如果没有节点或者只有一个节点，就返回null
  let slow = head.next; //定义快慢指针，慢指针每次移动一个节点
  let fast = head.next.next; //快指针每次移动两个节点，这样快慢指针总会在环内相遇
  while (fast && fast.next) { //指针不结束，存在下一个个节点
    slow = slow.next; //快慢指针移动
    fast = fast.next.next; //fast每次移动两个节点
    if (slow === fast) { //当两个指针相遇，说明存在环，开始找环的开始节点
      slow = head; //让slow重新定义为头结点开始一步一步移动
      while (slow !== fast) { //当快慢指针相遇，说明达到环的起始位置，此时的fast是从 相遇节点 开始一步移动一个节点
        slow = slow.next;
        fast = fast.next; //快慢指针一步步向环的起始位置开始移动
      }
      return slow; //返回此时的slow节点就是环开始的节点
    }
  }
  return null; //否则就是不存在环

}