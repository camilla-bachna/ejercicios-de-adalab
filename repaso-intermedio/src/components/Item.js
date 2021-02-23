import React from 'react';

const Item = (props) => {
  const clubMembers = props.clubItem.members.map((member, index) => {
    return (
      <li key={index} className="members">
        {member}
      </li>
    );
  });

  return (
    <div>
      <i className={'icon ' + props.clubItem.fa}></i>
      <div className="box">
        <h2 className="title">{props.clubItem.name}</h2>
        <h3 className="memberTitle">Members</h3>
        <ul className="clubmembers">{clubMembers}</ul>
      </div>
    </div>
  );
};
export default Item;
