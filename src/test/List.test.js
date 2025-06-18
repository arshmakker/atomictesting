import React from 'react'
import List from '../components/List'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

const sampleData = new Set([1, 2, 3, 4, 5, 8])

it("Renders the List correctly with no props", () => {
    const tree = renderer
        .create(<List />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Renders the List correctly with test props", () => {
    const tree = renderer
        .create(<List list={sampleData} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders all items from the provided set", () => {
    render(<List list={sampleData} />);
    
    const listContainer = screen.getByTestId('list-container');
    expect(listContainer).toBeInTheDocument();
    
    // Check that all items are rendered
    sampleData.forEach(item => {
        expect(screen.getByText(item.toString())).toBeInTheDocument();
    });
});

it("renders empty list when no data provided", () => {
    render(<List />);
    
    const listContainer = screen.getByTestId('list-container');
    expect(listContainer).toBeInTheDocument();
    expect(listContainer.children).toHaveLength(0);
});