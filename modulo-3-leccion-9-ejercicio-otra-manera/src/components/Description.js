function Description(props) {
  const handleInput = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
      value={props.description}
      onChange={handleInput}
      className="item"
    />
  );
}

export default Description;
