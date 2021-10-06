import React, { useState, useEffect} from "react";

import './headerStyle.css';

export default function HeaderBlock() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval( () => {
            setCount(count + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [count])

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <header className='header'>
            <h1 className='header__title'>Test task: Notification icon</h1>
            <div className='header__notification-container'>
                <button onClick={() => {}} className='header__notification-button'>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" id="_24x24_On_Light_Notification-Alert" data-name="24x24/On Light/Notification-Alert" xmlns="http://www.w3.org/2000/svg">
                        <rect id="view-box" width="24" height="24" fill="none"/>
                        <path id="Shape" d="M6,17v-.5H2.25A2.253,2.253,0,0,1,0,14.25v-.382a2.542,2.542,0,0,1,1.415-2.289A1.247,1.247,0,0,0,2.1,10.572l.446-4.91A6.227,6.227,0,0,1,10.618.286a5.477,5.477,0,0,0-.635,1.374A4.794,4.794,0,0,0,8.75,1.5,4.7,4.7,0,0,0,4.045,5.8L3.6,10.708A2.739,2.739,0,0,1,2.089,12.92a1.055,1.055,0,0,0-.589.949v.382A.751.751,0,0,0,2.25,15h13A.751.751,0,0,0,16,14.25v-.382a1.053,1.053,0,0,0-.586-.948A2.739,2.739,0,0,1,13.9,10.708l-.2-2.18a5.473,5.473,0,0,0,1.526.221l.166,1.822a1.26,1.26,0,0,0,.686,1.005,2.547,2.547,0,0,1,1.418,2.29v.382a2.252,2.252,0,0,1-2.25,2.25H11.5V17A2.75,2.75,0,0,1,6,17Zm1.5,0A1.25,1.25,0,0,0,10,17v-.5H7.5ZM15.047,6.744A3.486,3.486,0,0,1,13.5,6.28L13.456,5.8a4.7,4.7,0,0,0-1.648-3.185,3.5,3.5,0,0,1,.61-1.417A6.221,6.221,0,0,1,14.95,5.662l.1,1.081v0Z" transform="translate(3.25 2.25)" fill="#141124"/>
                        <path id="Shape-2" data-name="Shape" d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z" transform="translate(15 2)" fill="#ff6359"/>
                    </svg>
                    <span>{count}</span>
                </button>

            </div>

        </header>
    )
}

