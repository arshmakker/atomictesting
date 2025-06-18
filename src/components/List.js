import React from 'react'

function List({ list = new Set() }) {
    const renderListItems = () => {
        const domList = [];
        list.forEach(ele => {
            domList.push(<li key={ele}>{ele}</li>);
        });
        return domList;
    }

    return (
        <ul data-testid="list-container">
            {renderListItems()}
        </ul>
    );
}

export default List;