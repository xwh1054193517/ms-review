function quchong(objarr) {
  let len = objarr.length;
  let temp = {};
  let res = [];
  for (let i = 0; i < len; i++) {
    temp[JSON.stringify(objarr[i])] = true;
  }
  let keyItem = Object.keys(temp);
  for (let j = 0; j < keyItem.length; j++) {
    res.push(JSON.parse(keyItem[j]));
  }
  return res;
}


let obj = [{
    key: "nn",
    age: 2
  },
  {
    key: "name",
    age: "asd"
  },
  {
    key: "nn",
    age: 2
  }
]

console.log(quchong(obj));

let object = {};
let objres = obj.reduce((item,next) => {
    object[next.key] ? "" : object[next.key] = true && item.push(next);
    return item;
},[]);
console.log("objres si ",objres);