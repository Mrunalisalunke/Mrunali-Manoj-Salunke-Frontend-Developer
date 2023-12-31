import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from '../component/SearchForm';

test('renders SearchForm component', () => {
  render(<SearchForm onSearch={() => {}} />);
  expect(screen.getByText('Search Capsules')).toBeInTheDocument();
});

test('calls onSearch prop with correct values when the Search button is clicked', async () => {
  const onSearchMock = jest.fn();
  render(<SearchForm onSearch={onSearchMock} />);
  fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'active' } });
  fireEvent.change(screen.getByLabelText('Launch Date:'), { target: { value: '2023-01-01' } });
  fireEvent.change(screen.getByLabelText('Type:'), { target: { value: 'typeA' } });
  fireEvent.click(screen.getByText('Search'));

  await waitFor(() => {
    expect(onSearchMock).toHaveBeenCalledWith({
      status: 'active',
      launchDate: '2023-01-01',
      type: 'typeA',
    });
  });
});

