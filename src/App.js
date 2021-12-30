import React, { Component } from "react";
import Box from "./components/Box";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      colorOne: `#FF0000`,
      colorTwo: `#00FF00`,
    };

    this.colorChangeHandler = this.colorChangeHandler.bind(this);
  }

  genRandomColorCode() {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  }

  colorChangeHandler() {
    const randomColorOne = this.genRandomColorCode();
    const randomColorTwo = this.genRandomColorCode();

    this.setState({
      colorOne: randomColorOne,
      colorTwo: randomColorTwo,
    });
  }

  render() {
    return (
      <div className="centered">
        <div>
          <Box color={this.state.colorOne} />
          <Box color={this.state.colorTwo} />
          <button onClick={this.colorChangeHandler}>Change Color</button>
        </div>
      </div>
    );
  }
}

export default App;
