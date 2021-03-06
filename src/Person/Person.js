import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      {/* use the click from props to call the method defined in that click */}
      <p onClick={props.click}>
        I'm {props.name}, and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
