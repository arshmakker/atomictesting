import React from 'react'
import Search from './Search'
import LogoBar from './LogoBar'
import InitialList from './InitialList'
import ResultsList from './ResultsList'

function Header() {

    return (
        <>
            <div style={{
                display: "flex", margin: "20px",
                justifyContent: "space-around",
                background: "lightblue"
            }}>
                <LogoBar />
                <Search />
            </div>
            <div style={{
                display: "flex", margin: "20px",
                justifyContent: "space-around",
            }}>
                <div style={{
                    padding: "20px",
                    background: "lightgrey"
                }}>
                    <InitialList style={{
                        background: "grey"
                    }} />
                </div>
                <div style={{
                    padding: "20px",
                    background: "lightgreen"
                }}>
                    <ResultsList style={{
                        display: "flex", margin: "20px",
                        justifyContent: "space-around",
                        background: "lightblue"
                    }} />
                </div>
            </div>
        </>
    )
}

export default Header