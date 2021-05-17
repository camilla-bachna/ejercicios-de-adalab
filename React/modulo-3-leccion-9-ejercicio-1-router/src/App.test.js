// app.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import { createMemoryHistory } from 'history';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './components/App';

test('full app rendering/navigating', () => {
  render(<App />);
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about/i), leftClick);

  // check that the content changed to the new page
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});
