import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Bell from '../../assets/Bell.svg'
import RedLamp from '../shared/RedLamp/RedLamp'

import './Style.css'

const MAX_MESSAGES = 5

const Messages = ({ items, hello }) => {
  return items.map((item, index) => (
      <li key={'id = ' + index}>
        <div>{hello}</div>
        <div>{item.date}: {item.text}</div>
      </li>
  ))
}
Messages.propTypes = {
  hello: PropTypes.string,
  items: PropTypes.arrayOf({
    text: PropTypes.string,
    date: PropTypes.string
  })
}

export default function HeaderBlock () {
  const [notificationMessages, setNotificationMessages] = useState([])
  const [visibilityMessagesBox, setDisplayMessagesBox] = useState(true)

  const displayMessagesBox = () => {
    setDisplayMessagesBox(!visibilityMessagesBox)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationMessages([
        ...notificationMessages, {
          text: ` - Cообщение ${counterMessages + 1}`,
          isRead: false,
          date: new Date().toLocaleString()
        }
      ])
    }, 10000)
    return () => {
      clearInterval(interval)
    }
  }, [notificationMessages])

  // TODO: resetEvents и button 'Reset Notification' - здесь временно. Потом переедут в MainBlock
  const resetEvents = () => {
    setNotificationMessages([])
  }

  const topMessages = notificationMessages.slice(-MAX_MESSAGES)
  const counterMessages = notificationMessages.length

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

        {!visibilityMessagesBox && (
          <div className = "header__notification-message-box">
            <ul className = "header__notification-message-box__list">
              <Messages hello={'Hello'} items={topMessages} />
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
