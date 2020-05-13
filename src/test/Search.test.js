import React from 'react';
import Search from '../components/Search'
import renderer from 'react-test-renderer'

const classSearch = "sampleClass"
const title = "Sample Title"
const searchPlaceholder = "Sample PlaceHolder"
const onSearch = ()=>{
    alert("Alert test")
}

it('Search component is rendered correctly with no props',()=>{
    const tree = renderer
    .create(<Search />)
    .toJSON();
expect(tree).toMatchSnapshot();
})
it('Search component is rendered correctly with test props',()=>{
   
    const tree = renderer
    .create(<Search classSearch={classSearch}
        searchPlaceholder={searchPlaceholder}
        title={title}
        onSearch={onSearch} ></Search>)
    .toJSON();
expect(tree).toMatchSnapshot();
})