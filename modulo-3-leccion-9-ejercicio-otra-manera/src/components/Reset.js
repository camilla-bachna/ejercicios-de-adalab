function Reset(props) {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button onClick={handleReset} className="reset">
      Reset
    </button>
  );
}

export default Reset;
