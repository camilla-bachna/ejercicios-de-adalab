import '../stylesheets/App.css';
import Halfpage from './Halfpage';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Halfpage title="Estoy en la izquierda">
          <p>Hola</p>
        </Halfpage>
        <Halfpage title="Estoy en la derecha">
          <p>Mundo</p>
        </Halfpage>
        <Halfpage title="Estoy en la izquierda">
          <p>cómo</p>
        </Halfpage>
        <Halfpage title="Estoy en la derecha">
          <p>estáis</p>
        </Halfpage>
      </div>
    );
  }
}

export default App;
