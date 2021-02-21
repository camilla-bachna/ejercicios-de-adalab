import React from 'react';

const selectHandler = (ev) => {
  alert(`Your destination is${ev.target.value}`);
};
class CityImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li className="listItem">
          <img
            className="img"
            src={'https://pixabay.com/get/' + this.props.src}
            alt="City picture"
          />
        </li>
      </ul>
    );
  }
}
export default CityImage;
