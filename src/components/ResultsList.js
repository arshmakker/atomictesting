import React from 'react'
import List from './List'

function ResultsList({
    list = new Set()

}) {
    return (
        <List list={list} />
    )
}

export default ResultsList;