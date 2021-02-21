import '../stylesheets/App.css';
import OnionHater from './OnionHater';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <OnionHater>Escribe algo sobre cebollas</OnionHater>
      </div>
    );
  }
}

export default App;
