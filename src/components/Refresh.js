import React from 'react'
import { dateFormat } from '../lib'
import { ReloadOutlined } from '@ant-design/icons'
import { Space, Button, Typography } from 'antd'

const { Text } = Typography

const Refresh = ({ refreshDate, setRefreshDate }) => {
  return (
    <Space size='small'>
      <Button
        icon={<ReloadOutlined />}
        onClick={() => setRefreshDate((new Date()))}
      >
        Refresh
      </Button>
      <Text>
        {dateFormat(refreshDate)}
      </Text>
    </Space>
  )
}

export default Refresh
