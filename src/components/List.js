import React from 'react'

function List({
    list = new Set()

}) {

    const getList = (list = new Set()) => {
        const domList = [] 
        list.forEach(ele =>{
            domList.push( <li key={ele}>{ele}</li>    )
        })
        return domList
    }
    return (
         <ul>{getList(list)}</ul>)
}

export default List;