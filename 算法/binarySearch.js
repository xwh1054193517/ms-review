// 二分查找法的O(logn)让它成为十分高效的算法。不过它的缺陷却也是比较明显，就在它的限定之上：

// 有序：我们很难保证我们的数组都是有序的
// 数组：数组读取效率是O(1)，
// 可是它的插入和删除某个元素的效率却是O(n)
// 并且数组的存储是需要连续的内存空间，不适合大数据的情况

function binarySearch(arr, target) {
  if (arr.length <= 1) return -1
  let left = 0
  let right = arr.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target > arr[mid]) {
      left = mid + 1
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      // return mid
      // 如果数组中存在重复项，而我们需要找出第一个指定的值
      if (mid === 0 || arr[mid - 1] < target) return mid
      right = mid - 1
    }
  }
  return -1
}

let arr = [1, 2, 4, 7, 7, 10, 14, 17, 22]
console.log(binarySearch(arr, 7));

//转轮后的有序数组
let a = [4, 5, 6, 7, 0, 1, 2]
// 分界点元素 >= 第一个元素
// 分界点元素 < 第一个元素
function search(arr, target) {
  if (arr == null || !arr.length) {
    return -1
  }
  let begin = 0,
    end = arr.length - 1;
  while (begin <= end) {
    let mid = begin + ((end - begin) >> 1)
    if (arr[mid] == target) {
      return mid
    }
    //左边有序
    if (arr[begin] <= arr[mid]) {
      if (arr[begin] <= target && target <= arr[mid]) {
        end = mid - 1
      } else {
        begin = mid + 1
      }
    }
    // 右侧有序
    else {
      if (arr[mid] <= target && target <= arr[end]) {
        begin = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return -1
}

console.log(search(a, 6));