function Language(props) {
  const handleInput = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <select
      name="language"
      id="language"
      className="item"
      value={props.language}
      onChange={handleInput}
    >
      <option value="Spanish">Spanish</option>
      <option value="English">English</option>
      <option value="German">German</option>
    </select>
  );
}

export default Language;
