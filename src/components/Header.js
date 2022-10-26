import React from 'react'

export default function Header ( props ) {

    // console.log( props )

    const { isDarkMode, onDarkModeClick } = props

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}