import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// The expect function is already provided by the '@testing-library/jest-dom' library.
// You do not need to implement it manually. You can remove the placeholder code.

//   throw new Error('Function not implemented.');
// }
