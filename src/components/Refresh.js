import React from 'react'
import { dateFormat } from '../lib'
import { ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Refresh = ({ refreshDate, setRefreshDate }) => {
  return (
    <Button
      icon={<ReloadOutlined />}
      onClick={() => setRefreshDate((new Date()))}
    >
      refreshed {dateFormat(refreshDate)}
    </Button>
  )
}

export default Refresh
