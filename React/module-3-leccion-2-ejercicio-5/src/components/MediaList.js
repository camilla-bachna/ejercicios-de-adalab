import React from 'react';
import Mediacard from './Mediacard';
import pepino from '../images/logo.svg';
import image2 from '../images/logo.svg';
import image3 from '../images/logo.svg';
class MediaList extends React.Component {
  render() {
    return (
      <ul className="App-cardList">
        <li>
          <Mediacard
            name="Rajesh Patel"
            date="February 2020"
            image={pepino}
            text="Testing if it works props exercise"
            likes={48}
            heart={false}
          />
        </li>
        <li>
          <Mediacard
            name="Wisla"
            date="April 2010"
            image={image2}
            text="My favorite dog"
            likes={727}
            heart={true}
          />
        </li>
        <li>
          <Mediacard
            name="Osito"
            date="17 de Febrero de 2021"
            image={image3}
            text="Besos gordos para todas!!!!"
            likes={977}
            heart={true}
          />
        </li>
      </ul>
    );
  }
}
export default MediaList