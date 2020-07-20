import React from "react"
import "./NodeTable.css"
export default React.memo((props) => {
 const { isStart, isFinish, row, col, isVisited } = props
 const eleClsName = isStart
  ? "node-start"
  : isFinish
  ? "node-finish"
  : isVisited
  ? "node-visited"
  : ""

 return <div id={`node-${row}-${col}`} className={`node ${eleClsName}`}></div>
})
