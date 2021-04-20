import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(this.incrementCounter, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    return (
      <section className="section">
        <h2 className="interior">Counter</h2>
        <div className="interior">Contador: {this.state.counter}</div>
      </section>
    );
  }
}

export default Home;
