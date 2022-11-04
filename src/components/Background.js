import React from 'react'

import { Row } from 'antd'

const style = {
  padding: 16,
  backgroundColor: 'black',
  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg)'
}

const Background = ({ children }) => <Row align='center' style={style}>{children}</Row>

export default Background
