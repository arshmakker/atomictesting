import React from 'react'
import ResultsList from '../components/ResultsList'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

const sampleData = new Set(["result1", "result2", "result3"])

it("Renders the ResultsList correctly with no props", () => {
    const tree = renderer
        .create(<ResultsList />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Renders the ResultsList correctly with test props", () => {
    const tree = renderer
        .create(<ResultsList list={sampleData} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("displays search results when provided", () => {
    render(<ResultsList list={sampleData} />);
    
    sampleData.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
    });
});

it("displays empty list when no results", () => {
    render(<ResultsList list={new Set()} />);
    
    const listContainer = screen.getByTestId('list-container');
    expect(listContainer.children).toHaveLength(0);
});