import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "111", name: "Max", age: 28 },
      { id: "222", name: "Manu", age: 29 },
      { id: "333", name: "Stephanie", age: 31 }
    ]
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; //create a copy of the array before editing the original state object
    persons.splice(personIndex, 1); //remove one element from array at specified index
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    //find the index on the person in the state array
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //take a copy of the person that need to be updated from the state array
    const person = {
      ...this.state.persons[personIndex]
    };

    //update the person name in the copy version
    person.name = event.target.value;

    //take a copy of the entire state array
    const persons = [...this.state.persons];

    //update the copy of the persons array with the updated person
    persons[personIndex] = person;

    //update the state
    this.setState({ persons: persons });
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
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
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
