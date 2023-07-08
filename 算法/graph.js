const graph = {
  0: [1, 4],
  1: [2, 4],
  2: [2, 3],
  3: [],
  4: [3],
}
// 深度优先遍历
const visited = new Set()
const dfs = (n) => {
  console.log(n);
  visited.add(n)
  graph[n].forEach(c => {
    if (!visited.has(c)) {
      dfs(c)
    }
  })
}

// dfs(0)

//广度优先遍历
const visit = new Set()
const bfs = (n) => {
  visit.add(n)
  const q = [n]
  while (q.length) {
    const n = q.shift()
    console.log(n);
    graph[n].forEach(c => {
      if (!visit.has(c)) {
        q.push(c)
        visit.add(c)
      }
    })
  }
}

bfs(0)