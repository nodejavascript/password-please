import React from 'react'
import { returnItems } from '../lib'

import Password from './Password'

import { Space } from 'antd'

const PasswordsList = () => {
  const items = returnItems()
  return (

    <Space direction='vertical'>
      {
        items.map(item => <Password key={item.key} size={item.size} symbols={item.symbols} />)
      }
    </Space>
  )
}

export default PasswordsList
