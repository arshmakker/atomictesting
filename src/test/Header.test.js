import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'

const classHeader = "sample class"
const SampleData = new Set(["1st Sample",
    "2nd Sample",
    "3rd Sample"])

// describe()/
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
//functional testing
it('Renders the correct results after the search keyword is entered', () => {
    render(<Header InitialData={SampleData}/>)
    fireEvent.change(screen.getByTestId("searchText"),
        { target: { value: "2nd" } })
    expect(screen.getByTestId("searchText").value).toBe("2nd")
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getAllByText(/2nd/i).length).toBe(2)
    expect(screen.getAllByText(/1st/i).length).toBe(1)
});