import React from 'react'
import Search from './Search'
import LogoBar from './LogoBar'

function Header() {

    return (
        <div style={{
            display: "flex", margin: "20px",
            justifyContent: "space-around",
            background: "lightblue"
        }}>
            <LogoBar />
            <Search />
        </div>
    )
}

export default Header