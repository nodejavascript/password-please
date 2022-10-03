import React from 'react'
import Password from './Password'

import { Space } from 'antd'

const PasswordsList = ({ items }) => {
  return (

    <Space direction='vertical'>
      {
        items.map(item => <Password key={item.key} size={item.size} symbols={item.symbols} />)
      }
    </Space>
  )
}

export default PasswordsList
