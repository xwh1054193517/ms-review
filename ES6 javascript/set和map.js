// Set
const s = new Set()

// 增删改查：
// add,
// delte,
// has,
// clear

// add返回Set结构本身，已存在不会处理添加
s.add(1).add(2).add(2)

// delete删除某个值，返回布尔值，表示是否删除成功
s.delete(1)

// has返回一个布尔值，判断该值是否为set成员
s.has(2)

// clear清除所有成员

// 遍历
// keys 返回键名
// values 返回键值
// entires 返回键值对
// forEach 使用回调函数遍历每个成员

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// 去重
let arr = [3, 5, 2, 2, 5, 5]
let unique1 = [...new Set(arr)]
console.log(unique1);
let str = "352255";
let unique2 = [...new Set(str)].join(""); // ""
console.log(unique2);


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b])

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))

// 差集
let diff = new Set([...a].filter(x => !b.has(x)))

//Map 键值对的有序列表,而键和值都可以是任意类型
const m = new Map()

// set()
// 设置键名key对应的键值为value，然后返回整个 Map 结构

// 如果key已经有值，则键值会被更新，否则就新生成该键
m.set('foo', true)

// size
// size属性返回 Map 结构的成员总数。
console.log(m.size)

// get()
// get方法读取key对应的键值，如果找不到key，返回undefined
console.log(m.get('foo'))

// has()
// has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
// delete()
// delete方法删除某个键，返回true。如果删除失败，返回false
// clear()
// clear方法清除所有成员，没有返回值

// 迭代跟set相同

// WeakSet
// WeakSet可以接受一个具有 Iterable接口的对象作为参数
const ab = [
    [1, 2],
    [3, 4]
]
const ws = new WeakSet(ab)

// 没有遍历操作的API
// 没有size属性
// WeackSet只能成员只能是引用类型，而不能是其他类型的值
// 成员为引用类型
let obj1 = { name: 1 }
let obj2 = { name: 1 }
let ws1 = new WeakSet([obj1, obj2]);


// WeakMap
// WeakMap结构与Map结构类似，也是用于生成键值对的集合
// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
// 在API中WeakMap与Map有两个区别：

// 没有遍历操作的API
// 没有clear清空方法
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([
    [k1, 'foo'],
    [k2, 'bar']
]);
wm2.get(k2) // "bar"


// WeakSet里面的引用只要在外部消失，它在 WeakSet里面的引用就会自动消失
// WeakMap的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用


// 在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除