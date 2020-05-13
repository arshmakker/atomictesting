import React from 'react'

function Logo({
    classlogo="",
    srcImg = "https://img.icons8.com/ios/50/000000/pick-up.png"

}) {    
    return (
        <img className={classlogo} src={srcImg} alt="unapologetic logo"/>
    )
}

export default Logo;