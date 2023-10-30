"use strict";

/** Displays 3 Tweet Components in div*/
function App() {
  return (
    <div>
      <Tweet
        username="Ak"
        name="Akhaylin"
        message="Hello"
        date="today"
      />
      <Tweet
        username="log"
        name="Logan"
        message="Bye"
        date="Yesterday"
      />
      <Tweet
        username="test"
        name="test User"
        message="asdsad"
        date="today"
      />
    </div>
  );
}
