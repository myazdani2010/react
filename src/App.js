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

  switchNameHandler = nameParam => {
    console.log("switchNameHandler: was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: nameParam, age: 28 },
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
        {/* NOTE: the arrow function is not ideal way here due to performance insufficiency */}
        <button onClick={() => this.switchNameHandler("Maximilian!!")}>
          Swith me
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!!")} // on clicking this Person Paragrapth the method switchNameHandler will be called
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
