import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './components/App';

describe('Message', () => {
  test('should show message when button clicked', () => {
    //Arrange
    render(<App />);

    //Act
    const button = screen.getByRole('button', { name: /Add a paragraph/i });
    userEvent.click(button);

    //Assert
    const message = screen.getByRole('p');
    expect(message).toHaveTextContent(/Lorem ipsum dolor sit amet/i);
    /* const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(/Hola/i); */
  });
});
