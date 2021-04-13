import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  //look for an HTML tag containing the text learn react in the App component and check if it exists
  //Arrange
  render(<App />);
  //Act
  const linkElement = screen.getByText(/learn react/i);
  //Assert
  expect(linkElement).toBeInTheDocument();
});
