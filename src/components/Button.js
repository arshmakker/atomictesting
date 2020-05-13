import React from 'react'

function Button({
    classButton = "",
    title = "Press Me",
    onButtonPress = () => { console.log('Button Pressed') }
}) {
    return (
        <button className={classButton} onClick={onButtonPress}>{title}</button>
    )
}

export default Button;