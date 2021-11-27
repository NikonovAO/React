import React from 'react'

import HeaderBlock from './components/HeaderBlock/HeaderBlock'
import MainBlock from './components/MainBlock/MainBlock'

import Clock from './components/Clock'

// TODO подключить в проект redux - redux/toolkit
// TODO https://redux-toolkit.js.org/tutorials/quick-start
function App () {
  return (
    <div className="App">
      <HeaderBlock />
      <MainBlock />
      <Clock />
    </div>
  )
}

export default App
