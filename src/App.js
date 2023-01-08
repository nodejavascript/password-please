import React from 'react'
import './App.css'

import SiteLayout from './components/SiteLayout'

const rootStyle = { height: '100vh' }

const { NODE_ENV } = process.env
const App = () => {
  console.log('NODE_ENV', NODE_ENV)
  return (
    <div style={rootStyle}>
      <SiteLayout />
    </div>
  )
}

export default App
