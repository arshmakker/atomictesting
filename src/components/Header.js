import React, { useState } from 'react'
import Search from './Search'
import LogoBar from './LogoBar'
import InitialList from './InitialList'
import ResultsList from './ResultsList'

function Header({ InitialData = new Set(["1st Option", "2nd Option", "3rd Option"]) }) {
    const [results, setResults] = useState(new Set())

    const searchTriggered = keyword => {
        // Handle empty or invalid search terms
        if (!keyword || typeof keyword !== 'string' || keyword.trim() === '') {
            setResults(new Set());
            return;
        }

        const valuesFound = [];
        InitialData.forEach(ele => {
            try {
                if (ele && ele.toString().toLowerCase().includes(keyword.toLowerCase())) {
                    valuesFound.push(ele);
                }
            } catch (error) {
                console.warn('Error processing search item:', ele, error);
            }
        });
        setResults(new Set(valuesFound));
    }

    return (
        <>
            <div style={{
                display: "flex", margin: "20px",
                justifyContent: "space-around",
                background: "lightblue"
            }}>
                <LogoBar />
                <Search onSearchResults={searchTriggered} />
            </div>
            <div style={{
                display: "flex", margin: "20px",
                justifyContent: "space-around",
            }}>
                <div style={{
                    padding: "20px",
                    background: "lightgrey"
                }}>
                    <InitialList list={InitialData} />
                </div>
                <div style={{
                    padding: "20px",
                    background: "lightgreen"
                }}>
                    <ResultsList list={results} />
                </div>
            </div>
        </>
    )
}

export default Header