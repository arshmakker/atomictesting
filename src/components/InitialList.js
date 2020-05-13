import React from 'react'
import List from './List'

function InitialList({
    list = new Set()

}) {
    return (
        <List list={list} />
    )
}

export default InitialList;