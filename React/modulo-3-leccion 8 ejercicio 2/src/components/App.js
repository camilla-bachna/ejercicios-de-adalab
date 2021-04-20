import React from "react";
import Numbers from "./Numbers";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 4, 6, 8, 45, 89];

    return (
      <>
        <Numbers numbers={numbers} />
      </>
    );
  }
}
export default App;
