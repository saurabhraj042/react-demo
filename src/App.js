import React, { Component } from "react";
import Box from "./components/Box";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="centered">
        <div>
          <Box color={`#FF0000`} />
          <Box color={`#FF0000`} />
          <button>Change Color</button>
        </div>
      </div>
    );
  }
}

export default App;
