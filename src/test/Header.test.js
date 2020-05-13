import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'

const classHeader ="sample class"

it("Renders the Header correctly with no props ", () => {
    const tree = renderer
        .create(<Header/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Renders the Header correctly with test props", () => {
    const tree = renderer
        .create(<Header classHeader={classHeader}
             ></Header>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})