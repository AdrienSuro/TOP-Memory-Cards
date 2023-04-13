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

  useEffect(() => {
    const fetchCountryCodes = () => {
      fetch("https://flagcdn.com/en/codes.json")
        .then((response) => response.json())
        .then((data) => {
          let getCountries = [...Object.entries(data)];
          setAllCountries(getCountries);
        })
        .catch((error) => console.error(error));
    };
    fetchCountryCodes();
  }, []);

  function updateCountries() {
    let shuffledCountries = allCountries.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledCountries);
    let sixteenShuffledCountries = [];
    for (let i = 0; i < 16; i++) {
      sixteenShuffledCountries.push(shuffledCountries[i]);
    }
    setSixteenCountries(sixteenShuffledCountries);
  }

  //Will be used to display country names under flags
  // function getCountryNames() {
  //   return Object.values(data);
  // }

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Cards
        sixteenCountries={sixteenCountries}
        updateCountries={updateCountries}
      />
    </div>
  );
}

export default App;
