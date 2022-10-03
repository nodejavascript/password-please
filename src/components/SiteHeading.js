import React from 'react'
import { Card, Space, Avatar, Typography } from 'antd'

const { Text, Title } = Typography

const SiteTitle = () => {
  return (
    <Space align='center' size='large'>
      <Avatar size={64} src='https://res.cloudinary.com/nodejavascript-com/image/upload/v1664655192/password-please/cursor_gxo8ya.png' />
      <Title level={3}>password-please</Title>
    </Space>
  )
}

const SiteHeading = () => {
  return (
    <Card
      title={<SiteTitle />}
    >
      <Text italic>
        One-quick copy passwords ranked by security to make it the least annoying password generation page on the Internet, please. 🇺🇦
      </Text>
    </Card>
  )
}

export default SiteHeading
