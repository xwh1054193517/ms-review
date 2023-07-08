console.log(Number(324));
// 字符串：如果可以被解析为数值，则转换为相应的数值
console.log(Number('324'));
// 字符串：如果不可以被解析为数值，返回 NaN
console.log(Number('324abc'));
// 空字符串转为0
console.log(Number(''));
// 布尔值：true 转成 1，false 转成 0
console.log(Number(true));
console.log(Number(false));

// undefined：转成 NaN
console.log(Number(undefined));
// null：转成0
console.log(Number(null));
// 对象：通常转换成NaN(除了只包含单个数值的数组)
console.log(Number({ a: 1 }));

console.log(Number([1, 2, 3]));

console.log(Number([5]));

// Number转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为NaN

console.log(parseInt('32a3'))
    // parseInt相比Number，就没那么严格了，parseInt函数逐个解析字符，遇到不能转换的字符就停下来

// 数值：转为相应的字符串
String(1) // "1"

//字符串：转换后还是原来的值
String("a") // "a"

//布尔值：true转为字符串"true"，false转为字符串"false"
String(true) // "true"

//undefined：转为字符串"undefined"
String(undefined) // "undefined"

//null：转为字符串"null"
String(null) // "null"

//对象
String({ a: 1 }) // "[object Object]"
String([1, 2, 3]) // "1,2,3"


Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
Boolean({}) // true
Boolean([]) // true 任意对象都是True
Boolean(new Boolean(false)) // true

// toPrimitive
// 检查该值是否有 valueOf() 方法。
// 如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。
// 如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。

// valueOf与toString方法的返回值

// （ 1） 对于Object

// valueOf： 返回对象本身     
// toString： 返回的是 "[object type]"
// 字符串， "type"
// 指的是对象本身的类型识别。 例如Object对象返回 "[object Object]"，
// Math对象返回 "[object Math]"

// （2） 对于Array

//  valueOf： 返回对象本身     
// toString方法返回值: 相当于用数组值调用join(',') 所返回的字符串。 例如：[1, 2, 3].toString() 会是 "1,2,3"

// （3） 对于Number

// valueOf： 返回对象本身     
// toString： 转换为字符串类型时的字符串值。 可以传一个参数， 决定转换为字符串时的进制(2、 8、 16)

// （ 4） 对于String

// valueOf： 返回对象本身     
// toString： 返回对象本身


// （ 4） 对于Boolean

// valueOf： 返回对象本身     
// toString： 返回 "true"或 "false"
// 字符串