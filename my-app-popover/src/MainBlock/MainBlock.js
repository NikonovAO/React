import React from "react";

import './mainStyle.css'

// TODO Поставить eslint в проект
export default function MainBlock() {
    const handleNewEventSubmit = () => {

    }

    const myContant = 'abc';

    return (
        <main className="main">
            <h2 className='main__header'>Event management form</h2>

            <form name='formControlEvent' onSubmit={handleNewEventSubmit}>
                <div className="main__form">
                    <input type='text' name='nameEvent' placeholder='Введите название события...'/>
                    <button type='submit' name='addEvent'>Отправить</button>
                </div>
            </form>

            <button type='button' name='finishedAllEvent'>Пометить все события прочитанными</button>
            <button type='button' name='deleteAllEvent'>Удалить все события</button>
            <button type='button' name='togglePopup'>Скрыть / показать попап нотификаций (toggle btn) </button>
        </main>
    )
}
