import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello from React</h1>
        <Person name="Max" age="24" />
        <Person name="Manu" age="32" />
        <Person name="John" age="22" />
      </div>
    );
  }
}

export default App;
