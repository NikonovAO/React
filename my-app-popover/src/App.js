import React from 'react'

import FHeaderBlock from './components/HeaderBlock/FHeaderBlock'
import FMainBlock from './components/MainBlock/FMainBlock'

import Clock from './components/Clock'

// TODO подключить в проект redux - redux/toolkit
// TODO https://redux-toolkit.js.org/tutorials/quick-start
function App () {
  return (
    <div className="App">
      <FHeaderBlock />
      <FMainBlock />
      <Clock />
    </div>
  )
}

export default App
