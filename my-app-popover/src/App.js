import React from 'react'

import FHeaderBlock from './components/HeaderBlock/FHeaderBlock'
import MainBlock from './components/MainBlock/MainBlock'

import Clock from './components/Clock'

// TODO подключить в проект redux - redux/toolkit
// TODO https://redux-toolkit.js.org/tutorials/quick-start
function App () {
  return (
    <div className="App">
      <FHeaderBlock />
      <MainBlock />
      <Clock />
    </div>
  )
}

export default App
