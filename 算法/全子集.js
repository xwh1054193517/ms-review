function allSubsets(arr) {
  let res = [
    []
  ];
  for (let i = 0; i < arr.length; i++) {
    const tempRes = res.map(subset => {
      const one = subset.concat([]);
      one.push(arr[i])
      return one;
    })
    res = res.concat(tempRes)
  }
  return res;
}

let arr = [1, 2, 3]






function fun(arr) {
  if (arr.length == 0) return []
  let step = []
  let res = [
    []
  ]

  function backtracking(arr, start) {
    if (start == arr.length) return
    for (let i = start; i < arr.length; i++) {
      step.push(arr[i])
      res.push(Array.from(step))
      backtracking(arr, i + 1)
      step.pop()
    }
  }
  backtracking(arr,0)
  console.log(res);
}
fun(arr)