"use strict";

/** Displays 3 Person Components */
function App() {
  return (
    <div>
      <Person
        name="Ak"
        age="20"
        hobbies={["coding", "something else"]}
      />
      <Person
        name="Logan"
        age="16"
        hobbies={["coding", "basketball"]}
      />
      <Person
        name="test"
        age="18"
        hobbies={["coding", "basketball", "testing"]}
      />
    </div>
  );
}
