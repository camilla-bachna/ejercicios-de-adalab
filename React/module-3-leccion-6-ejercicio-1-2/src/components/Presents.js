import React, { useState } from "react";

const Presents = (props) => {
  return (
    <>
      <p>I have {props.presentsNumber} presents.</p>
      <button onClick={props.event}>Give me presents</button>
    </>
  );
};

export default Presents;
