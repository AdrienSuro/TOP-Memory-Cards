import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    const fetchCountryCodes = () => {
      fetch("https://flagcdn.com/en/codes.json")
        .then((response) => response.json())
        .then((data) => {
          setCountryCodes(
            Object.keys(data).map((e, index) => {
              return <li key={index}>{e}</li>;
            })
          );
          console.log(Object.keys(data));
        })
        .catch((error) => console.error(error));
    };
    fetchCountryCodes();
  }, []);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <div>
        <ol>{countryCodes}</ol>
      </div>
      <div>
        <h2>This is an example code :</h2>
        <img src="https://flagcdn.com/w160/za.png"></img>
      </div>
    </div>
  );
}

export default App;
