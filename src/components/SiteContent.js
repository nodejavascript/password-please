import React from 'react'
import SiteHeading from './SiteHeading'
import Refresh from './Refresh'
import PasswordsList from './PasswordsList'

import { Space } from 'antd'

const SiteContent = ({ items, refreshDate, setRefreshDate }) => {
  return (
    <Space direction='vertical' size='large'>

      <SiteHeading />

      <Refresh refreshDate={refreshDate} setRefreshDate={setRefreshDate} />

      <PasswordsList items={items} />

    </Space>
  )
}

export default SiteContent
