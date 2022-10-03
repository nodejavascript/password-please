import React from 'react'

import { Typography, Card, Row, Col } from 'antd'
const { Text, Link } = Typography

const notes = [
  {
    title: 'Open source',
    href: 'https://github.com/nodejavascript/password-please/blob/master/package.json',
    linkText: 'No Google Anayltics. No Ads.'
  },
  {
    title: 'Create by',
    href: 'https://github.com/nodejavascript',
    linkText: '@nodejavascript'
  },
  {
    title: 'Attribution',
    href: 'https://www.flaticon.com/authors/freepik',
    linkText: 'Thank you freepik for the free flaticon.com icon 👍'
  }
]

const SiteFooter = () => {
  return (
    <Card>
      <Row align='center' justify='space-between'>
        {
          notes.map(note => {
            const { title, href, linkText } = note

            return (
              <Col key={title} flex='auto'>
                <Text style={{ fontSize: 10, paddingRight: 3 }}>{title}</Text>

                {
                  href &&
                    <Link href={href}>
                      {linkText}
                    </Link>
                }
              </Col>
            )
          })
        }
      </Row>
    </Card>
  )
}

export default SiteFooter
