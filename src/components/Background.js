import React from 'react'

import { Row } from 'antd'

const Background = ({ children, clicked }) => {
  const style = { }

  style.backgroundColor = 'black'
  style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg)'

  // if (clicked) {
  //   style.backgroundColor = '#191919'
  // } else {
  //   style.backgroundColor = 'black'
  //   style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg)'
  // }
  return (
    <Row
      align='center'
      style={style}
    >
      {children}
    </Row>
  )
}

export default Background
