import React, { Component } from 'react'

import Bell from '../../assets/Bell.svg'

import './Style.css'
// TODO: 7 - лучше использовать функциональные компоненты, но если используешь классовые, то наследуйся от PureComponent
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
  // TODO: 32,33, ненадо таскать хвост. this.state везже, вытащи переменные заранее через спреад оператор const { value} =this.state
  tick () {
    this.setState({
      counterMessages: this.state.counterMessages + 1,
      notificationMessages: [...this.state.notificationMessages, new Date().toLocaleString() + ` - Cообщение ${this.state.counterMessages + 1}`]
    })
    console.log(this.state.notificationMessages)
  }
  // TODO: 33, формирование текста можно вынести в отдельную функцию
  resetEvents () {
    this.setState({
      notificationMessages: '',
      counterMessages: 0
    })
  }
// TODO: 40, сообщения это массив строк, когда зануляешь его ты ты должен передавать не пустую строку а пустой массив
  displayMessagesBox () {
    this.setState({
      visibilityMessagesBox: !this.state.visibilityMessagesBox
    })
  }
// TODO: 53 - используй спреад оператор
  render () {
    let displayMessages = ''
    if (this.state.notificationMessages.length > 0) {
      displayMessages = this.state.notificationMessages.slice(Math.max(this.state.notificationMessages.length - 5, 0)).map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
// TODO: 54, это просто адский ад! Разбивай эту строку на несколько переменных - операций, чтобы таких длинных строк преобразований не было
    let elemMessageBox = ''
    if (this.state.visibilityMessagesBox) {
      elemMessageBox =
      <div className = "message-box">
        <ul className = "message-box__list">
          {displayMessages}
        </ul>
      </div>
    }
// TODO: 55, в качестве ключа индекс нельзя использовать, используй уникальный идентификатор, либо составной, индекс + текст или синтетический guid
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

// TODO: 59-67 это делается не так, создается константа MyComponent которой ты присваиваешь верстку, потом в самой верстке ты делаешь так,
// TODO: { isMessageBoxVisible && <MyComponent /> } 69-72, аналогично

// TODO: 80тстрока, если ты вешаешь обработку onClick на что-то, то это должна быть либо кнопка, либо ссылка, если это переход на другую страницу те. навигация, то это ссылка, если действие, то это кнопка,

// TODO: const MyComponent = (props) => {
// TODO:   const myLocalValueHi = "Привет";
// TODO:   return (
// TODO:   <div>
// TODO:     {myLocalValueHi}  {props.myValue}
// TODO:   </div>
// TODO: );
// TODO: }