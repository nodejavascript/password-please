import React, { useState } from 'react'
import SiteContent from './SiteContent'
import SiteFooter from './SiteFooter'

import { Row, Space, Layout } from 'antd'

const returnItems = () => {
  const items = []

  const sizes = [48, 32, 24, 16, 8]

  sizes.forEach(size => {
    items.push({ size })
    items.push({ size, symbols: 'true' })
  })

  items.forEach(item => {
    const { size, symbols } = item
    item.key = `${size}_${symbols ? 'symbols' : 'alphanumeric'}`
  })

  return items
}

const SiteLayout = () => {
  const [refreshDate, setRefreshDate] = useState((new Date()))

  const items = returnItems()

  return (
    <Layout className='layout'>
      <Row align='center'>
        <Space direction='vertical' style={{ paddingBottom: 16 }}>

          <SiteContent items={items} refreshDate={refreshDate} setRefreshDate={setRefreshDate} />

          <SiteFooter />

        </Space>

      </Row>
    </Layout>
  )
}

export default SiteLayout
