import React from "react";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [countryCodes, setCountryCodes] = useState("fr");
  const [randomFlag, setRandomFlag] = useState(
    "https://flagcdn.com/w160/za.png"
  );

  useEffect(() => {
    const fetchCountryCodes = () => {
      fetch("https://flagcdn.com/en/codes.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let numberOfCountries = Object.keys(data).length;
          let randomNumber = Math.floor(Math.random() * numberOfCountries);
          setCountryCodes(Object.keys(data)[randomNumber]);
        })
        .catch((error) => console.error(error));
    };
    fetchCountryCodes();
  }, []);

  //Will be used to display country names under flags
  // function getCountryNames() {
  //   return Object.values(data);
  // }

  return (
    <div className="App">
      <Scoreboard />
      <Cards />
    </div>
  );
}

export default App;
