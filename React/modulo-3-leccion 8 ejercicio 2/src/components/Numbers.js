import React from "react";

const Numbers = (props) => {
  const isEvenChecked = true;

  const itemFilter = props.numbers
    .filter((filterNumber) => {
      console.log(filterNumber);
      return filterNumber > 6;
    })
    .filter((filterNumber) => {
      console.log(filterNumber);
      if (isEvenChecked === true) {
        return filterNumber % 2 === 0;
      } else {
        return true;
      }
    })
    .map((filterNumber, index) => {
      return <li key={index}>{filterNumber}</li>;
    });
  return (
    <>
      <ul>{itemFilter}</ul>

      <form>
        <label>
          Number:
          <input type="text" name="name" />
          <input type="checkbox" name="odd" />
        </label>
      </form>
    </>
  );
};

export default Numbers;
