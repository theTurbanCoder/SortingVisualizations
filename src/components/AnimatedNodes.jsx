import React, { useEffect, useState } from "react"
import NodeTable from "./NodeTable"

export default React.memo((props) => {
 const { checkNode } = props
 const [nodes, setNodes] = useState([])
 useEffect(() => {
  //   console.log("changes")
  const i_id = setInterval(() => {
   const testNodes = checkNode.map((row, rowIdx) => {
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
   setNodes(testNodes)
  }, 2500)

  return () => {
   clearInterval(i_id)
  }
 }, [checkNode])

 return <div style={{ display: "grid", margin: "50% 0 50% 0" }}>{nodes}</div>
})
