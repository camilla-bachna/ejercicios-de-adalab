// import '../App.css';
import React from 'react';
// import Mediacard from './Mediacard';
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Mediacard title="Alex Guerrero"><h3 className="title">Lunes 26 de junio de 2017</h3>
//         <img
//               src=" https://via.placeholder.com/60x60/5F9EA0/666666/?text=Foto"
//               alt="placeholder"
//               className="foto"
//             /> 
//         </Mediacard>
//         <Mediacard title="Camilla Bachna" ></Mediacard>
//         <Mediacard title="Ana Bescós" ></Mediacard>
//       </div>
//     );
//   }
// }
// export default App;

// import React from 'react';
import MediaList from './MediaList';
import '../App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaList />
      </div>
    );
  }
}
export default App;