import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 31 }
    ]
  };

  switchNameHandler = () => {
    console.log("switchNameHandler: was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 22 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from React</h1>
        {/* NOTE: don't add the parantecies for the method in the onClick */}
        <button onClick={this.switchNameHandler}>Swith me</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
