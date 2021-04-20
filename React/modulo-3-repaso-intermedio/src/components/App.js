import React from 'react';
import data from '../data/data.json';
import List from './List';
import '../stylesheets/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <List clubs={data} />
      </div>
    );
  }
}
export default App;
