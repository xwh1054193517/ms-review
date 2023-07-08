{
  /* <div>
    <span>
      <a></a>
    </span>
    <span>
      <a></a>
      <a></a>
    </span>
  </div>
  把上诉dom结构转成下面的JSON格式
  {
    tag: 'DIV',
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] }
        ]
      },
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ] */
}


function dom2Json(domtree) {
  let obj = {}
  obj.name = domtree.tagName;
  obj.children = []
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)))
  return obj
}

//虚拟dom转真实dOm
function _render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}