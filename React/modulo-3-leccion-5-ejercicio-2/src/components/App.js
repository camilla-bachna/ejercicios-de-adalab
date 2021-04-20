import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'container',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === 'container') {
        nextStyling = 'containerTwo';
      } else {
        nextStyling = 'container';
      }

      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    const { styling } = this.state;
    return <div className={styling} onClick={this.handleClick}></div>;
  }
}
export default App;
