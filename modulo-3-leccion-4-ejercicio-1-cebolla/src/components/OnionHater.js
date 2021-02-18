import React from 'react';

class OnionHater extends React.Component {
  render() {
    const onChangeListener = (ev) => {
      if (ev.target.value.includes('cebolla')) {
        alert('ODIO LA CEBOLLA');
      } else if (ev.target.value.includes('Cebolla')) {
        alert('ODIO LA CEBOLLA');
      }
    };
    return (
      <textarea
        className="cebolla"
        onChange={onChangeListener}
        placeholder="Escribe algo sobre cebollas:)"
        cols="80"
        rows="20"
      ></textarea>
    );
  }
}

export default OnionHater;
