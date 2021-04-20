import { render, screen } from '@testing-library/react';
import App from './components/App';

describe('check HTML tags and href', () => {
  //When we have a lot of tests we will want to group them in so-called test suites.
  test('check if HTML tag contains text Aprendiendo React in the App component', () => {
    //look for an HTML tag containing the text Aprendiendo React in the App component and check if it exists
    //arrange
    render(<App />);
    //act
    const linkElement = screen.getByText(/aprendiendo react/i);
    //assert
    expect(linkElement).toBeInTheDocument();
  });

  test('check if "Aprendiendo React" is a link', () => {
    //arrange
    render(<App />);
    //act
    const linkElement = screen.getByText(/aprendiendo react/i);
    console.log(linkElement.nodeName); // in the console appears A because the links are created with <a href="...">text</a>.
    const linkTagName = linkElement.nodeName;
    //assert
    expect(linkTagName).toBe('A');
  });

  test('check if "Hola mundo" is a heading', () => {
    //arrange
    render(<App />);
    //act
    const headingElement = screen.getByText(/hola mundo/i);
    console.log(headingElement.nodeName); // in the console appears H1
    const headingTagName = headingElement.nodeName;
    //assert
    expect(headingTagName).toBe('H1');
  });

  test('check the href of the link', () => {
    //arrange
    render(<App />);
    //act
    const url = screen.getByText(/aprendiendo react/i).href;
    //assert
    expect(url).toBe('https://reactjs.org/');
  });
});
