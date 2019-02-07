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

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; //create a copy of the array before editing the original state object
    persons.splice(personIndex, 1); //remove one element from array at specified index
    this.setState({ persons: persons });
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

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    } else {
      persons = null;
    }

    return (
      <div className="App">
        <h1>Hello from React</h1>
        {/* NOTE: don't add the parantecies for the method in the onClick */}
        {/* NOTE: the arrow function is not ideal way here due to performance insufficiency */}
        <button style={inlineStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
