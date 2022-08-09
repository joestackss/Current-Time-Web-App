import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [timer, myTimes] = useState("");

  setInterval(getTime, 1000);

  function getTime() {
    let time = new Date().toLocaleTimeString();

    return myTimes(time);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
