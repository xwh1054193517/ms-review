// ...扩展运算，能将一个数组变为参数序列
console.log(...[1, 2, 3])
const a1 = [1, 2]
const [...a2] = a1
const a3 = [...a2, ...a1]
console.log(a2, a3);
//他是一个浅拷贝，定义了iterator接口的对象都可以使用,map

// 构造函数
// Array.from能将类似数组和可遍历的对象（包括map,set)转为真正数组

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': { a: 1, b: 2 },
    length: 4
};
let arr2 = Array.from(arrayLike)
arrayLike[3].a = 5
console.log(arr2);
// 还能接受第二个参数，用于对每个元素进行处理,放回返回的数组
Array.from([1, 2, 3], (x) => x * x)
    //浅拷贝

// Array.of将一组值转换为数组，没有参数返回一个空数组，只有一个参数时，实际上指定数组长度，参数不少2才会返回组成的数组
console.log(Array.of(1, 2, 3))
console.log(Array.of())
console.log(Array(3))


// 实例对象新增方法
// copyWithin()指定位置的成员复制到其他位置，返回当前数组
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
console.log([1, 2, 3, 4, 5].copyWithin(0, 3))

// find()用于找出第一个符合条件的数组成员
// [1, 5, 10].find(function(value, index, arr) {
//         return value > 9;
//     }) // 10

// //不符合条件则-1
// [1, 5, 10, 15].findIndex(function(value, index, arr) {
//         return value > 9;
//     }) // 2

//都可以接受第二个参数，绑定this对象

// fill只用给定值，填充一个数组
// 接受第二第三个参数，开始位置和结束位置
// ['a', 'b', 'c'].fill(7, 1, 2)

// keys()是对键名的遍历，values()对键值的遍历，entries()对键值对的遍历
for (let index of['a', 'b'].keys()) {
    console.log(index);
}

for (let elem of['a', 'b'].values()) {
    console.log(elem);
}

for (let [index, elem] of['a', 'b'].entries()) {
    console.log(index, elem);
}

// includes判断数组是否包含给定的值
console.log([1, 2, 3].includes(2))
console.log([1, 2, 3].includes(4))
    //第二个参数表示搜索的起始位置，负数表示倒数位置
console.log([1, 2, 3].includes(2, -1)); // true

// flat,flatmap将数组扁平化处理，返回一个新数组
console.log([1, 2, [3, 4]].flat())

//flat默认值会拉平一层，若想拉平多层，可以将参数写成一个整数表示拉平的层数
console.log([1, 2, [3, [4, 5]]].flat(2))

// flatMap()对原数组的每个成员执行一个函数，对返回值的数组执行flat，返回新数组
//接受第二个参数，绑定this
[2, 3, 4].flatMap((x) => [x, x * 2])

// 稳定排序
const arr = [
    'peach',
    'straw',
    'apple',
    'spork'
];

const stabelSorting = (s1, s2) => {
    if (s1[0] < s2[0]) return -1
    return 1
}

console.log(arr.sort(stableSorting));