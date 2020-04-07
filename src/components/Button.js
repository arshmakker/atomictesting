import React from 'react'

function Button({
    classButton= "",
    title= "Press Me",

}) {    
    return (
        <button className={classButton}>{title}</button>
    )
}

export default Button;