// async function fn1() {
//     console.log(1)
//     await fn2()
//     console.log(2) // 阻塞
// }

// async function fn2() {
//     console.log('fn2')
// }

// fn1()
// console.log(3)


async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function() {
    console.log('settimeout')
})
async1()
new Promise(function(resolve) {
    console.log('promise1')
    resolve()
}).then(function() {
    console.log('promise2')
})
console.log('script end')

//结果:script start,async1 start,async2,promise1,script end |此时当前宏任务完毕| async1 end,promise2,settimeout


// 宏队列：settimeout
// 微队列:await,then