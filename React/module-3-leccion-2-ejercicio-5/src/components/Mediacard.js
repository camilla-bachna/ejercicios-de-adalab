// import '../App.css';
// import React from 'react';
// class Mediacard extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <main className="App-main">
//           <div className="App-container">
//             <div className="container">
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.children}</h3>
                
//             </div>
//       <p className="App-paragraph">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             deleniti fuga quod sequi, exercitationem aut, eum quis doloremque
//             cum velit sit nam, aperiam eveniet repellendus ut optio sint dolorem
//             natus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Incidunt deleniti fuga quod sequi, exercitationem aut, eum quis
//             doloremque cum velit sit nam, aperiam eveniet repellendus ut optio
//             sint dolorem natus.
//           </p>
//           </div>
         
//           <small className="small">Leer más...</small>
//           <span className="span">
//             37
//             <i className="fas fa-heart"></i>
//           </span>
//         </main>
//       </div>
//     );
//   }
// }
// export default Mediacard;

import React from 'react';
import '../App.css';
class Mediacard extends React.Component {
  render() {
    let heartElement;
    if (this.props.heart === true) {
      heartElement = <i className="fas fa-heart"></i>;
    } else {
      heartElement = <i className="far fa-heart"></i>;
    }
    return (
      <article className="App-article">
        <section className="App-section1">
          <div className="App-title">
            <h2 className="App-name">{this.props.name}</h2>
            <h3 className="App-date">{this.props.date}</h3>
          </div>
        </section>
        <section>
          <img src={this.props.image} className="App-photo" alt="Portrait" />
          <p>{this.props.text}</p>
        </section>
        <section className="App-footer">
          <span className="App-likes">{this.props.likes}</span>
          {heartElement}
        </section>
      </article>
    );
  }
}
export default Mediacard;