import React from 'react';

const PersonDetail = (props) => {
  return (
    <section className="section">
      <h2>Details of persons</h2>
      {props.children}
    </section>
  );
};

export default PersonDetail;
