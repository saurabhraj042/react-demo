import React, { Component } from "react";
import "./App.css";
import ClassBox from "./components/ClassBox";
import ContextApp from "./components/ContextApp";
import CounterReducer from "./components/CounterReducer";
import HookBox from "./components/HookBox";
import HookJokeBox from "./components/HookJokeBox";

class App extends Component {
  render() {
    return (
      <div>
        {" "}
        {/* <ClassBox /> */} {/* <HookBox/> */} {/* <HookJokeBox/> */}{" "}
        {/* <ContextApp/> */}
        <CounterReducer/>
      </div>
    );
  }
}

export default App;
