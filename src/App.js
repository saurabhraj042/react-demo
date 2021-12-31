import React, { Component } from "react";
import "./App.css";
import ClassBox from "./components/ClassBox";
import HookBox from "./components/HookBox";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ClassBox /> */}
        <HookBox/>
      </div>
    );
  }
}

export default App;
