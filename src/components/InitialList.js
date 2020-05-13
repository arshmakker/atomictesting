import React from 'react'
import List from './List'

function InitialList({
    list = new Set(["1st Option",
        "2nd Option",
        "3rd Option"])

}) {
    return (
        <List list={list} />
    )
}

export default InitialList;