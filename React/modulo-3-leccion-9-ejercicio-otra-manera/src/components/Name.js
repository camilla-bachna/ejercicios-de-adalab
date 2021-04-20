function Name(props) {
  const handleInput = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <input
      type="text"
      name="name"
      placeholder="write the name of a movie..."
      value={props.name}
      onChange={handleInput}
      className="item"
    />
  );
}

export default Name;
