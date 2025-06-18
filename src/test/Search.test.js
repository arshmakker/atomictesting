import React from 'react';
import Search from '../components/Search'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'

const classSearch = "sampleClass"
const title = "Sample Title"
const searchPlaceholder = "Sample PlaceHolder"

it('Search component is rendered correctly with no props', () => {
    const tree = renderer
        .create(<Search />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it('Search component is rendered correctly with test props', () => {
    const tree = renderer
        .create(<Search 
            classSearch={classSearch}
            searchPlaceholder={searchPlaceholder}
            title={title}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it('calls onSearchResults when search button is clicked', () => {
    const mockOnSearchResults = jest.fn();
    render(<Search onSearchResults={mockOnSearchResults} />);
    
    const input = screen.getByTestId('searchText');
    const button = screen.getByRole('button');
    
    fireEvent.change(input, { target: { value: 'test search' } });
    fireEvent.click(button);
    
    expect(mockOnSearchResults).toHaveBeenCalledWith('test search');
});

it('updates input value when typing', () => {
    render(<Search />);
    
    const input = screen.getByTestId('searchText');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(input.value).toBe('new value');
});

it('calls onSearchResults with empty string when input is empty', () => {
    const mockOnSearchResults = jest.fn();
    render(<Search onSearchResults={mockOnSearchResults} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnSearchResults).toHaveBeenCalledWith('');
});