import React from 'react'
import Background from './Background'

import SiteHeader from './SiteHeader'
import SegmentedUI from './SegmentedUI'
import SiteFooter from './SiteFooter'

import { Space } from 'antd'

const SiteLayout = () => {
  return (
    <Background>
      <Space direction='vertical' size='large'>

        <SiteHeader />

        <SegmentedUI />

        <SiteFooter />

      </Space>
    </Background>
  )
}

export default SiteLayout
