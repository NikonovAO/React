import React, { useState, useEffect} from "react";

import Bell from "./Bell.svg";

import "./headerStyle.css";

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
        <header className="header">
            <h1 className="header__title">Test task: Notification icon</h1>
            <div className="header__notification-container">
                <button onClick={() => {}} className="header__notification-button">
                    <img src={Bell} className="header__notification-container-logo" alt="logo-Bell" />
                    <span className="header__notification-container-counter"> {count} </span>
                    
                </button>

            </div>

        </header>
    )
}

