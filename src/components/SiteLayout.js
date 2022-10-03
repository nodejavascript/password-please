import React, { useState } from 'react'
import SiteContent from './SiteContent'
import SiteFooter from './SiteFooter'

import { Row, Space, Layout } from 'antd'

import { Gradient } from 'react-gradient'

const property = 'background'
const angle = '45deg'
const duration = 5000
const gradients = [
  ['#bd19d6', '#000000'],
  ['#4B0A55', '#000000']
]

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
      <Gradient
        gradients={gradients}
        property={property}
        duration={duration}
        angle={angle}
      >

        <Row align='center'>

          <Space direction='vertical' style={{ paddingBottom: 16 }}>

            <SiteContent items={items} refreshDate={refreshDate} setRefreshDate={setRefreshDate} />

            <SiteFooter />

          </Space>

        </Row>

      </Gradient>
    </Layout>

  )
}

export default SiteLayout
