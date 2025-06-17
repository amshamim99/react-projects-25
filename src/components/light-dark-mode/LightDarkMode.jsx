import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const LightDarkMode = () => {

    const [theme,SetTheme] = UseLocalStorage("theme","dark")
    function handleToggleTheme(){
        SetTheme(theme === "light" ? "dark" : "light")
    }
    console.log(theme)
    return (
        <div className='light-dark-mode py-40' data-theme={theme}>
            <div className='container mx-auto text-center'>
                <p className='mb-5 text-3xl'>Hello World !</p>
                <button className='py-3 px-10 rounded-lg cursor-pointer' onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode