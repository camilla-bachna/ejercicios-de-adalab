import '../stylesheets/App.css';

import React from 'react';

class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20,
      },
      {
        promo: 'B',
        name: 'María',
        age: 21,
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22,
      },
    ];
    return (
      <div className="container">
        <h1>Pintar el listado de estudiantes con su nombre y edad:</h1>
        {/* con este map iteramos iteramos el array de items */}
        {students.map((student) => {
          // cada return retorna un li
          return (
            <li>
              <h2>Nombre: {student.name}</h2>
              <h3>Edad: {student.age}</h3>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
