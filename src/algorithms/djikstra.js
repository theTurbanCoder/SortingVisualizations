export const djikstra = (grid, startNode, finishNode) => {
 const visitedNodes = []
 startNode.distance = 0
 //  console.log(startNode)
 const unvisitedNodes = getAllNodes(grid)

 while (!!unvisitedNodes.length) {
  sortNodesByDistance(unvisitedNodes)
  let closeNodes = unvisitedNodes.shift()
  //   console.log(closeNodes, "closeNode")

  if (closeNodes.distance === Infinity) return visitedNodes

  closeNodes.isVisited = true
  visitedNodes.push(closeNodes)

  if (closeNodes === finishNode) return visitedNodes

  updateUnvisitedNeighbours(closeNodes, grid)
 }
}

const updateUnvisitedNeighbours = (node, grid) => {
 const unvisited = getUnvistedNeighbours(node, grid)
 for (let unNode of unvisited) {
  unNode.distance = node.distance + 1
  unNode.previousNode = node
 }
}

const getUnvistedNeighbours = (node, grid) => {
 const neighbours = []

 const { col, row } = node

 if (row > 0) neighbours.push(grid[row - 1][col])

 if (row < grid.length - 1) neighbours.push(grid[row + 1][col])

 if (col > 0) neighbours.push(grid[row][col - 1])

 if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1])

 return neighbours.filter((neigh) => !neigh.isVisited)
}

const sortNodesByDistance = (unvisitedNodes) => {
 return unvisitedNodes.sort((a, b) => a.distance - b.distance)
}

const getAllNodes = (grid) => {
 const nodes = []

 for (let row of grid) {
  for (let node of row) {
   nodes.push(node)
  }
 }

 return nodes
}

export const shortestPath = (finishNode) => {
 const nodesInOrder = []
 let lastNode = finishNode

 while (lastNode !== null) {
  nodesInOrder.unshift(lastNode)
  lastNode = lastNode.previousNode
 }

 return nodesInOrder
}
