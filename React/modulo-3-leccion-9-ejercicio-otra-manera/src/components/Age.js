function Age(props) {
  const handleInput = (event) => {
    props.handleInput(event.target.name, event.target.value);
    console.log('');
  };
  return (
    <>
      <h3>Age limit</h3>
      <label>
        <input
          type="radio"
          name="language"
          value="all ages"
          checked={props.value === 'all ages'}
          onChange={handleInput}
          className="radioButton"
        />
        All ages
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="option 1"
          checked={props.value === 'option 1'}
          onChange={handleInput}
          className="radioButton"
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="option 2"
          checked={props.value === 'option 2'}
          onChange={handleInput}
          className="radioButton"
        />
        12
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="option 3"
          checked={props.value === 'option 3'}
          onChange={handleInput}
          className="radioButton"
        />
        16
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="option 4"
          checked={props.value === 'option 4'}
          onChange={handleInput}
          className="radioButton"
        />
        18
      </label>
    </>
  );
}

export default Age;
