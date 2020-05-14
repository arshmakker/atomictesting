import React from 'react'
import List from '../components/List'
import renderer from 'react-test-renderer'


const sampleData = [1,2,3,4,5,8]


it("Renders the Button correctly with no props ", () => {
    const tree = renderer
        .create(<List/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
it("Renders the Button correctly with test props", () => {

    const tree = renderer
        .create(<List list={sampleData}
             ></List>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})