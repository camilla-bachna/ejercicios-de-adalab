import '../App.scss';
import React from 'react';

class Mediacard extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          <div className="App-container">
            <img
              src=" https://via.placeholder.com/60x60/5F9EA0/666666/?text=Foto"
              alt="placeholder"
              className="foto"
            />
            <div className="container">
              <h1 className="title">Alex Guerrero</h1>
              <h3 className="title">Lunes 26 de junio de 2017</h3>
            </div>
          </div>
          <p className="App-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            deleniti fuga quod sequi, exercitationem aut, eum quis doloremque
            cum velit sit nam, aperiam eveniet repellendus ut optio sint dolorem
            natus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt deleniti fuga quod sequi, exercitationem aut, eum quis
            doloremque cum velit sit nam, aperiam eveniet repellendus ut optio
            sint dolorem natus.
          </p>
          <small className="small">Leer más...</small>
          <span className="span">
            37
            <i className="fas fa-heart"></i>
          </span>
        </main>
      </div>
    );
  }
}

export default Mediacard;
