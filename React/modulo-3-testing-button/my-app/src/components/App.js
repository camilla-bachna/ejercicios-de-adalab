import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    /* alert('Hola'); */
  }

  render() {
    const paragraph = [];
    for (let index = 0; index < this.state.counter; index++) {
      paragraph.push(
        <p key={index} className="App">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          quibusdam similique, nobis voluptatem, eaque iste modi nesciunt
          doloribus optio, cumque dolores tenetur labore veniam cupiditate
          voluptate enim assumenda corporis tempore.
        </p>
      );
    }

    return (
      <div className="App">
        <header>
          <h1>Hello</h1>
        </header>
        <main>
          <h2>Click the button</h2>
          <button className="App-button" onClick={this.handleClick}>
            Add a paragraph
          </button>
          <div>{paragraph}</div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
