import React from 'react';
import '../stylesheets/App.css';
import Destination from './Destination';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Destination />
      </div>
    );
  }
}
export default App;
