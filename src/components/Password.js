import React from 'react'
import { returnPassword } from '../lib'
import { CopyOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { Space, Typography } from 'antd'

const { Text, Paragraph } = Typography

const Password = ({ size, symbols }) => {
  const password = returnPassword(size, symbols)

  return (
    <Space align='baseline'>
      <Text
        code
      >
        {password}
      </Text>
      <Paragraph
        copyable={{
          icon: [
            <CopyOutlined key='copy' />,
            <CheckCircleOutlined key='copied' />
          ],
          tooltips: false,
          text: password
        }}
      />
    </Space>
  )
}

export default Password
