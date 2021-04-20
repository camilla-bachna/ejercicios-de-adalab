import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleonChange = this.handleonChange.bind(this);
    this.isHating = false;
  }

  handleonChange(ev) {
    const page = document.querySelector('.page');
    const inputValue = ev.target.value.toLowerCase();
    this.forceUpdate();
    if (inputValue.includes('cebolla')) {
      this.isHating = true;
      page.classList.add('odioCebolla');
    } else {
      this.isHating = false;
      page.classList.remove('odioCebolla');
    }
  }

  render() {
    return (
      <div>
        <textarea className="cebolla" onChange={this.handleonChange}>
          {this.props.children}
        </textarea>
      </div>
    );
  }
}

export default OnionHater;
