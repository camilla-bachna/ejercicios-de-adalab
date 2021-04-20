import React from 'react';
import CityImage from './CityImage';

const selectHandler = (ev) => {
  alert(`This is a picture of ${ev.target.value}`);
};

class Destination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <select name="destination" id="destination" onChange={selectHandler}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Prague">Prague</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <CityImage
          name="Buenos Aires"
          src="53e1d3414f4faa0df7c5997cc1293477143ad8e25b_640.jpg"
        />
        <CityImage
          name="Sydney"
          src="55e1d6414b54b10ff3d89960c62e367d1c3edbe05a57_640.jpg"
        />
        <CityImage
          name="Prague"
          src="53e0d64a4857aa14f1dc8460da29317f1636dfe0545473_640.jpg"
        />
        <CityImage
          name="Boston"
          src="57e6d6424e54ac14f1dc8460da29317f1636dfe0565471_640.jpg"
        />
        <CityImage
          name="Tokyo"
          src="52e7d3404355aa14f1dc8460da29317f1636dfe0505379_640.jpg"
        />
      </div>
    );
  }
}
export default Destination;
