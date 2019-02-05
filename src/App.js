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
      ],
      otherState: "some other value",
      showPerson: false
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 }, //takes the value from the Person component input text
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const inlineStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hello from React</h1>
        {/* NOTE: don't add the parantecies for the method in the onClick */}
        {/* NOTE: the arrow function is not ideal way here due to performance insufficiency */}
        <button style={inlineStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPerson ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!!")} // on clicking this Person Paragrapth the method switchNameHandler will be called
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
