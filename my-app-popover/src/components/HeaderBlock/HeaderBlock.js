import React, { Component } from 'react'

import Bell from '../../assets/Bell.svg'

import './Style.css'

export default class HeaderBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notificationMessages: [],
      counterMessages: 0,
      visibilityMessagesBox: false
    }
    this.resetEvents = this.resetEvents.bind(this)
    this.displayMessagesBox = this.displayMessagesBox.bind(this)
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      counterMessages: this.state.counterMessages + 1,
      notificationMessages: [...this.state.notificationMessages, new Date().toLocaleString() + ` - Cообщение ${this.state.counterMessages + 1}`]
    })
    console.log(this.state.notificationMessages)
  }

  resetEvents () {
    this.setState({
      notificationMessages: '',
      counterMessages: 0
    })
  }

  displayMessagesBox () {
    this.setState({
      visibilityMessagesBox: !this.state.visibilityMessagesBox
    })
  }

  render () {
    let displayMessages = ''
    if (this.state.notificationMessages.length > 0) {
      displayMessages = this.state.notificationMessages.slice(Math.max(this.state.notificationMessages.length - 5, 0)).map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }

    let elemMessageBox = ''
    if (this.state.visibilityMessagesBox) {
      elemMessageBox =
      <div className = "message-box">
        <ul className = "message-box__list">
          {displayMessages}
        </ul>
      </div>
    }

    let redLamp = ''
    if (this.state.counterMessages > 0) {
      redLamp = <div className = "red-lamp" />
    }

    return (
      <header className="header">
        <h1 className="header__title">Test task: Notification icon</h1>
        <div className="header__notification-container">
          <button type="button" className="header__notification-button">
            <img src={Bell} className="header__notification-container-logo" alt="logo-Bell" onClick={this.resetEvents}/>
            <span className="header__notification-container-counter" onClick={this.displayMessagesBox}>{this.state.counterMessages}</span>
            {redLamp}
          </button>
        </div>
        {elemMessageBox}
      </header>
    )
  }
}
