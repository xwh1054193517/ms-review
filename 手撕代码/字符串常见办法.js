// concat 拼接成一个新的字符串
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"

// slice,substr,subString创建一个字符串的副本进行操作
let s = 'hello world'
console.log(s.slice(3));
console.log(s.slice(3, 7));
console.log(s.substr(3));
console.log(s.substr(3, 7));
console.log(s.substring(3));
console.log(s.substring(3, 7));

// trim()、trimLeft()、trimRight()
// 删除前、后或前后所有空格符，再返回新的字符串
let stringValue1 = " hello world ";
let trimmedStringValue = stringValue1.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"

// repeat()
// 接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果
let stringValue2 = "na ";
let copyResult = stringValue2.repeat(2) // na na
console.log(copyResult);

// padEnd()
// 复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件
let stringValue3 = "foo";
console.log(stringValue3.padStart(6)); // " foo"
console.log(stringValue3.padStart(9, ".")); // "......foo"


// charAt()
// 返回给定索引位置的字符，由传给方法的整数参数指定
let message = "abcde";
console.log(message.charAt(2)); // "c"

// indexOf()
// 从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）
console.log(message.indexOf('c'));

// startWith()、includes()
// 从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值
let message2 = "foobarbaz";
console.log(message2.startsWith("foo")); // true
console.log(message2.startsWith("bar")); // false
console.log(message2.includes("bar")); // true
console.log(message2.includes("qux")); // false


// split
// 把字符串按照指定的分割符，拆分成数组中的每一项
let str = "12+23+34"
let arr = str.split("+") // [12,23,34]
console.log(arr);


// match()
// 接收一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象，返回数组
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches[0]); // "cat"

// search()
// 接收一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象，找到则返回匹配索引，否则返回 -1
let pos = text.search(/at/);
console.log(pos); // 1

// replace()
// 接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）
let result2 = text.replace("at", "ond");
console.log(result2); // "cond, bat, sat, fat"