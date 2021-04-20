import React, { useState } from "react";
import Presents from "./Presents";

const App = () => {
  const [age, setAge] = useState(20);
  const [presents, setPresents] = useState(0);

  const handleClick = () => {
    setAge(age + 1);
  };

  const handleClickPresents = () => {
    setPresents(presents + 1);
  };

  return (
    <>
      <p className="App">I am {age} years old.</p>
      <Presents presentsNumber={presents} event={handleClickPresents} />
      <button onClick={handleClick}>Make me one year older</button>
    </>
  );
};

export default App;
