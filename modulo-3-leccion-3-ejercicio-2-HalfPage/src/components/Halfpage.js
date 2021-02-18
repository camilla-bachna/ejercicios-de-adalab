import React from 'react';

class Halfpage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Halfpage;
