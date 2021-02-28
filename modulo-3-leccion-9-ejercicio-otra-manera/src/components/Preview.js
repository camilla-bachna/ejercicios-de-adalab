function Preview(props) {
  return (
    <article className="article">
      <h2 className="item">The film is {props.name}</h2>
      <p className="item">The description: {props.description}</p>
      <h3 className="item">
        The choosen language is {props.language.toUpperCase()}
      </h3>
      <p className="item">The age limit is: {props.ages}</p>
    </article>
  );
}

export default Preview;
