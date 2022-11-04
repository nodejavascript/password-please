import React, { useState, useEffect } from 'react'

import { returnSegmentedData, returnPassword } from '../lib'

import { CopyOutlined } from '@ant-design/icons'

import { Card, Segmented, Row, Col, Button, Typography, Space } from 'antd'

const { Text } = Typography

const SelectLength = ({ defaultValue, onChange }) => {
  const { lengths } = returnSegmentedData()
  return (
    <Segmented options={lengths} defaultValue={defaultValue} onChange={onChange} />
  )
}

const SelectSymbols = ({ defaultValue, onChange }) => {
  const { symbols } = returnSegmentedData()
  return (
    <Segmented options={symbols} defaultValue={defaultValue} onChange={onChange} />
  )
}

const Selectors = ({ input, setInput }) => {
  const sizeChange = size => setInput({ ...input, size })
  const symbolsChange = symbols => setInput({ ...input, symbols })

  return (
    <Row justify='space-between' wrap>
      <Column title='Size' content={<SelectLength defaultValue={input.size} onChange={sizeChange} />} />
      <Column title='Symbols' content={<SelectSymbols defaultValue={input.symbols} onChange={symbolsChange} />} />
    </Row>
  )
}

const CopyButton = ({ password, setPassword }) => {
  return (
    <Text
      copyable={{
        icon: [
          <Button
            key='copybutton'
            type='primary'
            shape='round'
            size='large'
            icon={<CopyOutlined />}
            onClick={() => setPassword(false)}
          >
            Copy to your clipboard
          </Button>,
          <Space key='copiedText' direction='vertical' size='small'>
            <Text code>Copied...</Text>
            <Text>...a new new password is ready for you</Text>
          </Space>
        ],
        tooltips: false,
        text: password
      }}
    />
  )
}

const SeePassword = ({ password }) => {
  const [seePassword, setSeePassword] = useState(false)
  if (!seePassword) return <Button type='link' onClick={() => setSeePassword(true)}>See password</Button>
  if (password && seePassword) return <Button type='link' onClick={() => setSeePassword(false)}>{password?.substring(0, 5)}...</Button>
}

const SegmentedUI = () => {
  const { lengthDefault: size, symbolsDefault: symbols } = returnSegmentedData()

  const [input, setInput] = useState({ size, symbols })
  const [password, setPassword] = useState()

  useEffect(() => {
    return setPassword(returnPassword(input))
  }, [input, setPassword])

  useEffect(() => {
    if (!password) setPassword(returnPassword(input))
  }, [password, input, setPassword])

  return (
    <Card
      title={<Selectors input={input} setInput={setInput} />}
    >
      <Space direction='vertical' align='center' style={{ width: '100%' }}>
        <CopyButton password={password} setPassword={setPassword} />
        <SeePassword password={password} />
      </Space>
    </Card>
  )
}

export default SegmentedUI

const Column = ({ title, content }) => {
  return (
    <Col flex='1' style={{ padding: 16 }}>
      <Space direction='vertical' align='center' size='small' style={{ width: '100%' }}>
        <Text>{title}</Text>
        {content}
      </Space>
    </Col>
  )
}
