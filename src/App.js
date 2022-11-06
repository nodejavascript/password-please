import React from 'react'
import './App.css'

import SiteLayout from './components/SiteLayout'

const rootStyle = { height: '100vh' }

const App = () => {
  return (
    <div style={rootStyle}>
      <SiteLayout />
    </div>
  )
}

export default App
