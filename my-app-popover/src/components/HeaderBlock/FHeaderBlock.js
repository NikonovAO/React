import React, { useState, useEffect } from 'react'

import Bell from '../../assets/Bell.svg'
import RedLamp from '../shared/RedLamp/RedLamp'

import './Style.css'

export default function HeaderBlock () {
  const [notificationMessages, setnotificationMessages] = useState([])
  const [visibilityMessagesBox, setDisplayMessagesBox] = useState(true)
  const [counterMessages, setCounterMessages] = useState(0)

  const displayMessages = () => {
    const maxMessages = 5
    const displayedMessages = notificationMessages.slice(Math.max(notificationMessages.length - maxMessages, 0))
    let messagesOutput = ''
    if (notificationMessages.length > 0) {
      messagesOutput = displayedMessages.map((item, index) => (
        <li key={'id = ' + index}>{item}</li>
      ))
      return messagesOutput
    }
  }

  const elemMessageBox = (
    <div className = "header__notification-message-box">
      <ul className = "header__notification-message-box__list">
        {displayMessages()}
      </ul>
    </div>
  )

  const displayMessagesBox = () => {
    setDisplayMessagesBox(!visibilityMessagesBox)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterMessages(prevCount => prevCount + 1)
      setnotificationMessages([...notificationMessages, new Date().toLocaleString() + ` - Cообщение ${counterMessages + 1}`])
    }, 10000)
    return () => {
      clearInterval(interval)
    }
  }, [notificationMessages])

  // TODO: resetEvents и button 'Reset Notification' - здесь временно. Потом переедут в MainBlock
  const resetEvents = () => {
    setCounterMessages(0)
    setnotificationMessages([])
  }

  return (
    <header className="header">
      <h1 className="header__title">Test task: Notification icon</h1>
      <button onClick={resetEvents}>Reset Notification</button>
      <div className="header__notification-container">
        <button type="button" className="header__notification-button" onClick={displayMessagesBox}>
          <img src={Bell} className="header__notification-container-logo" alt="logo-Bell"/>
          <span className="header__notification-container-counter">{counterMessages}</span>
          {notificationMessages.length > 0 && <RedLamp/>}
        </button>
        {!visibilityMessagesBox && elemMessageBox}
      </div>
    </header>
  )
}
