import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
function DisplayContent() {
  return (
    <div style={{display:'flex'}}>
        <div><LeftSide /></div>
        <div><RightSide /></div>
    </div>
  )
}

export default DisplayContent