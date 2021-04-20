import React from "react";
import "../stylesheets/App.css";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 0,
      sheep: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((currentState, props) => {
      let newText;
      newText = currentState.text + 1;

      return {
        text: newText,
      };
    });
    const newImage = document.createElement("img");
    newImage.setAttribute(
      "src",
      "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png"
    );
    const container = document.querySelector(".sheepContainer");
    container.appendChild(newImage);
  }

  render() {
    return (
      <>
        <button className={``} onClick={this.handleClick}>
          Contador de ovejas:
        </button>
        <p>{this.state.text}</p>
        <div className="sheepContainer"></div>
      </>
    );
  }
}

export default SheepCounter;
