import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserContext } from '../../App';
import Post from './Post';

describe('Post component', () => {
  test('renders without errors', () => {
    const mockUserContext = {
      user: { displayName: 'Test User' },
      displayName: 'Test User',
    };

    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContext}>
          <Post />
        </UserContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Hello, Test User')).toBeInTheDocument();
  });

  test('displays loading spinner when loading', () => {
    render(
      <MemoryRouter>
        <Post />
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  // Add more test cases for different scenarios or functions within the component
});