import React from 'react'
import Background from './Background'

import SiteHeader from './SiteHeader'
import SegmentedUI from './SegmentedUI'
import SiteFooter from './SiteFooter'

import { Space, Layout } from 'antd'

// import { Gradient } from 'react-gradient'
//
// const property = 'background'
// const angle = '45deg'
// const duration = 5000
// const gradients = [
//   ['#bd19d6', '#000000'],
//   ['#4B0A55', '#000000']
// ]

const SiteLayout = () => {
  // const [refreshDate, setRefreshDate] = useState()

  return (

    <Layout className='layout'>

      <Background>

        <Space direction='vertical' size='large'>

          <SiteHeader />

          <SegmentedUI />

          <SiteFooter />

        </Space>

      </Background>
    </Layout>

  )
}

export default SiteLayout

// <Gradient
//   gradients={gradients}
//   property={property}
//   duration={duration}
//   angle={angle}
// >
// </Gradient>
