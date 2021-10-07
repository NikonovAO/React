import React from 'react'

import './Style.css'

// TODO Поставить eslint в проект
export default function MainBlock () {
  const handleNewEventSubmit = () => {

  }

  return (
    <main className="main">
      <h2 className="main__header">Event management form</h2>

      <form name="formControlEvent" className="main__form form-control-event" onSubmit={handleNewEventSubmit}>
        <input type="text" className="form-control-event__name-event" name="nameEvent" placeholder="Введите название события..." />
        <button type="submit" className="form-control-event__add-event">Отправить</button>
      </form>
      <div className="main__button-block button-block">
        <button type="button" className="button-block__finished-all-event">Пометить все события прочитанными</button>
        <button type="button" className="button-block__delete-all-event">Удалить все события</button>
        <button type="button" className="button-block__toggle-popup">Скрыть / показать попап нотификаций (toggle btn) </button>
      </div>

    </main>
  )
}
