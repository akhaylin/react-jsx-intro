"use strict";

/** Takes name age, and list of hobbies returns div of information about a person */
function Person({ name, age, hobbies }) {
  return (
    <div>
      <h1>Learn some information about this person</h1>
      <h2>name: {name.length > 8 ? name.substring(0, 8) : name}</h2>
      <h2>age: {age}</h2>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18 to vote"}</h3>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
}
