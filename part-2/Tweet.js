"use strict";

/** Takes {username, name, date, message} in prop and returns div with a tweet */
function Tweet({ username, name, date, message }) {
  const myStyles = {
    color: "blue",
    backgroundColor: "red",
  };
  return (
    <div style={myStyles}>
      <p>{name}</p>
      <p>{message}</p>
      <p>{username}</p>
      <p>{date}</p>
    </div>
  );
}
