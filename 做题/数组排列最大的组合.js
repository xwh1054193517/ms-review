var largestNumber = function(nums) {
	// 从大到小排序
    let arr = nums.sort((a,b)=>{
        return `${b}${a}`-`${a}${b}`
    })
	// 下面的代码是为了去掉数字开头的0。避免类似[0,0]这样的用例报错。
    let i = 0
    while(arr[i]==0 && i!==arr.length-1) {
        i++
    }
    return arr.slice(i).join('')
};


// ab>ba 那就将a放在前面
// sort(ba-ab) 降序
let arr=[123,42,12,4]
console.log(largestNumber(arr))