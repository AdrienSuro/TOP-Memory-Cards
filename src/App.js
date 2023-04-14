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
  const [clickedCountries, setClickedCountries] = useState([]);

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

  useEffect(() => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
  }, [currentScore, highestScore]);

  function updateCountries() {
    let shuffledCountries = allCountries.sort((a, b) => 0.5 - Math.random());
    let sixteenShuffledCountries = [];
    for (let i = 0; i < 16; i++) {
      sixteenShuffledCountries.push(shuffledCountries[i]);
    }
    setSixteenCountries(sixteenShuffledCountries);
  }

  function onCountryClick(country) {
    if (clickedCountries.includes(country)) {
      console.log("country already here");
      return;
    }
    setClickedCountries([...clickedCountries, country]);
    setCurrentScore(currentScore + 1);
  }

  function testLog() {
    console.log(clickedCountries);
  }

  return (
    <div className="App">
      <button onClick={testLog}>Test log</button>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Cards
        sixteenCountries={sixteenCountries}
        updateCountries={updateCountries}
        onCountryClick={onCountryClick}
      />
    </div>
  );
}

export default App;
