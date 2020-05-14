import React from 'react'
import InitialList from '../components/InitialList'
import renderer from 'react-test-renderer'


const sampleData = [1,2,3,4,5,8]


it("Renders the Button correctly with no props ", () => {
    const tree = renderer
        .create(<InitialList/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
it("Renders the Button correctly with test props", () => {

    const tree = renderer
        .create(<InitialList list={sampleData}
             ></InitialList>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})