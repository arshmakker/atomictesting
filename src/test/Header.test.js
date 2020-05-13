import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'

afterEach(cleanup)
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
afterEach(cleanup)
//functional testing
it('Renders the correct results after the search keyword is entered', () => {
render (<Header InitialData={SampleData}/>)
    
    fireEvent.change(screen.getByPlaceholderText('Type here to search',
    { target: { value: "1st Sample" } }))
    fireEvent.click(screen.getByText(/search/i))
    expect(screen.getAllByText('1st Sample').length).toBe(2)
});