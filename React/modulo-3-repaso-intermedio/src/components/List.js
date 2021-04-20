import React from 'react';
import Item from './Item';
import '../stylesheets/App.css';

const List = (props) => {
  const clubItem = props.clubs.map((clubItem, index) => {
    return (
      <li className="listItem" key={index}>
        <Item clubItem={clubItem} />
      </li>
    );
  });

  return <ul>{clubItem}</ul>;
};
export default List;
