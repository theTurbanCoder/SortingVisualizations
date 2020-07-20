import React, { useEffect, useState } from "react"
import NodeTable from "./NodeTable"
import { djikstra, shortestPath } from "../algorithms/djikstra"

const START_NODE_ROW = 10
const START_NODE_COL = 15
const FINISH_NODE_ROW = 10
const FINISH_NODE_COL = 45

const createNode = (row, col) => {
 return {
  row,
  col,
  distance: Infinity,
  isVisited: false,
  previousNode: null,
  isStart: row === START_NODE_ROW && col === START_NODE_COL,
  isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
 }
}

export default React.memo((props) => {
 const [myNodes, setMyNodes] = useState([])

 const runDjikstra = () => {
  const djNodes = myNodes
  const startNode = djNodes[START_NODE_ROW][START_NODE_COL]
  const finishNode = djNodes[FINISH_NODE_ROW][FINISH_NODE_COL]
  const inorderNodes = djikstra(djNodes, startNode, finishNode)
  const shortestNodes = shortestPath(finishNode)

  console.log(shortestNodes, "shortestNodes")
  animateDjikstra(inorderNodes, shortestNodes)
 }

 const animateDjikstra = (visitedInorder, nodesInShortestPath) => {
  for (let i = 0; i < visitedInorder.length; i++) {
   if (i === visitedInorder.length - 1) {
    setTimeout(() => {
     animateShortestPath(nodesInShortestPath)
    }, 10 * i)
    return
   }

   setTimeout(() => {
    const node = visitedInorder[i]
    document.getElementById(`node-${node.row}-${node.col}`).className =
     "node node-visited"
   }, 10 * i)
  }
 }

 const animateShortestPath = (nodesInShortestPath) => {
  console.log("in function")
  for (let i = 0; i < nodesInShortestPath.length; i++) {
   setTimeout(() => {
    const node = nodesInShortestPath[i]
    console.log(node, "test")
    document.getElementById(`node-${node.row}-${node.col}`).className =
     "node node-shortest-path"
   }, 50 * i)
  }
 }

 useEffect(() => {
  const nodes = []
  for (let row = 0; row < 20; row++) {
   const currentRow = []
   for (let col = 0; col < 50; col++) {
    currentRow.push(createNode(row, col))
   }
   nodes.push(currentRow)
  }

  setMyNodes(nodes)
 }, [])

 const testNodes = myNodes.map((row, rowIdx) => {
  return (
   <div key={rowIdx}>
    {row.map((node, nodeIdx) => {
     const { col, row } = node
     return (
      <NodeTable
       isStart={node.isStart}
       isFinish={node.isFinish}
       key={nodeIdx}
       row={row}
       isVisited={node.isVisited}
       col={col}></NodeTable>
     )
    })}
   </div>
  )
 })

 return (
  <div>
   <button onClick={runDjikstra}> Run Djikstra </button>
   <div style={{ display: "grid", margin: "50% 0 50% 0" }}>{testNodes}</div>
  </div>
 )
})
