import React from 'react'
import Logo from './Logo'

function LogoBar({
    logoText = "Ma Web",

}) {
    return (
        <>
            <div>{logoText}</div>
            <Logo />
        </>
    )
}

export default LogoBar;