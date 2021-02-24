import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ' please add a description here...',
      value: 'Spanish',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }
  handleInput(event) {
    this.setState({ name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleLanguage(event) {
    this.setState({ language: event.target.value });
  }
  render() {
    return (
      <>
        <form className="container">
          <h1 className="title">
            Fill in your name, description and choose a language
          </h1>
          <input
            type="text"
            name="name"
            placeholder="write your name here..."
            value={this.state.name}
            onChange={this.handleInput}
            className="item"
          />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.handleDescription}
            className="item"
          >
            please add a description here...
          </textarea>
          <select
            name="language"
            id="language"
            className="item"
            value={this.state.language}
            onChange={this.handleLanguage}
          >
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="German">German</option>
          </select>
          <input type="submit" value="Enviar" className="item" />
        </form>
        <article className="article">
          <h2 className="item">Your name is {this.state.name}</h2>
          <p className="item">Your description: {this.state.description}</p>
          <h3 className="item">
            You choose the language {this.state.language}
          </h3>
        </article>
      </>
    );
  }
}
export default App;
