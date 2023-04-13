import React from "react";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import "./styles/styles.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [sixteenCountries, setSixteenCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [countryCodes, setCountryCodes] = useState("fr");
  const [randomFlag, setRandomFlag] = useState(
    "https://flagcdn.com/w160/za.png"
  );
  let allCountrycodes = [];

  useEffect(() => {
    const fetchCountryCodes = () => {
      fetch("https://flagcdn.com/en/codes.json")
        .then((response) => response.json())
        .then((data) => {
          let allCountries = [...Object.entries(data)];
          let shuffledCountries = allCountries.sort(
            (a, b) => 0.5 - Math.random()
          );
          for (let i = 0; i < 16; i++) {
            sixteenCountries.push(shuffledCountries[i]);
          }
          console.log(sixteenCountries);
          // let numberOfCountries = Object.keys(data).length;
          // let randomNumber = Math.floor(Math.random() * numberOfCountries);
          // setCountryCodes(Object.keys(data)[randomNumber]);
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
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Cards sixteenCountries={sixteenCountries} />
    </div>
  );
}

export default App;
