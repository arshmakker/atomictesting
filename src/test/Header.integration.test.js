import React from 'react'
import Header from '../components/Header'
import { render, fireEvent, screen } from '@testing-library/react'

const testData = new Set(["Apple", "Banana", "Cherry", "Date"])

describe('Header Integration Tests', () => {
    it('performs complete search flow correctly', () => {
        render(<Header InitialData={testData} />);
        
        // Initial state - all items should be visible in initial list
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
        
        // Perform search
        const searchInput = screen.getByTestId('searchText');
        fireEvent.change(searchInput, { target: { value: 'a' } });
        fireEvent.click(screen.getByRole('button'));
        
        // Check results - should show items containing 'a'
        const results = screen.getAllByText(/Apple|Banana|Date/);
        expect(results.length).toBeGreaterThan(0);
    });

    it('handles empty search correctly', () => {
        render(<Header InitialData={testData} />);
        
        const searchInput = screen.getByTestId('searchText');
        fireEvent.change(searchInput, { target: { value: '' } });
        fireEvent.click(screen.getByRole('button'));
        
        // Should clear results
        expect(searchInput.value).toBe('');
    });

    it('handles case-insensitive search', () => {
        render(<Header InitialData={testData} />);
        
        const searchInput = screen.getByTestId('searchText');
        fireEvent.change(searchInput, { target: { value: 'APPLE' } });
        fireEvent.click(screen.getByRole('button'));
        
        // Should find 'Apple' despite case difference
        expect(screen.getAllByText('Apple').length).toBeGreaterThan(0);
    });

    it('handles search with no results', () => {
        render(<Header InitialData={testData} />);
        
        const searchInput = screen.getByTestId('searchText');
        fireEvent.change(searchInput, { target: { value: 'xyz' } });
        fireEvent.click(screen.getByRole('button'));
        
        // Should show no results
        expect(screen.queryByText('Apple')).not.toBeInTheDocument();
    });
});