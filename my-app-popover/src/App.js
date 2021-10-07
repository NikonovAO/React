import React from 'react'

import HeaderBlock from './components/HeaderBlock/HeaderBlock'
import MainBlock from './components/MainBlock/MainBlock'

// TODO подключить в проект redux - redux/toolkit
// TODO https://redux-toolkit.js.org/tutorials/quick-start
function App () {
  return (
    <div className="App">
      <HeaderBlock />
      <MainBlock />
    </div>
  )
}

export default App
