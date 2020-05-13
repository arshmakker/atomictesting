import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'

const classHeader = "sample class"
const SampleData = new Set(["1st Sample",
    "2nd Sample",
    "3rd Sample"])

it("Renders the Header correctly with no props ", () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Renders the Header correctly with test props", () => {
    const tree = renderer
        .create(<Header InitialData={SampleData}
            classHeader={classHeader}>
        </Header>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})