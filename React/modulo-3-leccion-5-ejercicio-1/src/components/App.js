import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handleType = this.handleType.bind(this);
  }

  handleType(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <input
          type="text"
          name="input"
          placeholder="type here"
          onKeyUp={this.handleType}
          className="input"
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default App;
