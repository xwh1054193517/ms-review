// 二叉树
function treeNode(val) {
  this.val = val
  this.left = null;
  this.right = null
}
// 前序遍历
// 递归
const preorder = (root) => {
  if (!root) {
    return
  }
  console.log(root);
  preorder(root.left)
  preorder(root.right)
}

//非递归
//先添加右节点再左节点 因为是栈 先进后出
const preOrder = (root) => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val);
    if (n.right) {
      stack.push(n.right)
    }
    if (n.left) {
      stack.push(n.left)
    }
  }
}

// 中序遍历
// 递归
const inorder = (root) => {
  if (!root) {
    return
  }
  inorder(root.left)
  console.log(root.val);
  inorder(root.right)
}
// 非递归
// 先一直压入节点的左节点，左节点没有才开始出栈
const inOrder = (root) => {
  if (!root) {
    return
  }
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val);
    p = n.right
  }
}

// 后序遍历
//递归
const postorder = (root) => {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(n.val);
}

//非递归
const postOrder = (root) => {
  if (!root) return
  const stack = [root]
  const output = []
  while (stack.length) {
    const n = stack.pop()
    output.push(n.val)
    if (n.right) {
      stack.push(n.right)
    }
    if (n.left) {
      stack.push(n.left)
    }
  }
  while (output.length) {
    const n = output.pop()
    console.log(n.val);
  }
}

//层序遍历
// 递归版
const helpFun = (root, level, arr) => {
  if (!root) return
  if (!arr[level]) {
    array[level] = []
  }
  array[level].push(root.val)
  helpFun(root.left, level + 1, arr)
  helpFun(root.right, level + 1, arr)
}
const levelorder = (root) => {
  if (!root) return []
  let arr = []
  helpFun(root, 0, arr)
  return arr
}


const levelOrder = (root) => {
  const res = []
  if (!root) return res
  const stack = []
  stack.push(root)
  while (stack.length) {
    const currentLevel = stack.length
    res.push([])
    for (let i = 1; i <= currentLevel; i++) {
      const node = stack.shift()
      res[res.length - 1].push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }
  return res
}


