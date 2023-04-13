import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.css";

export default function Cards(props) {
  const [sixteenCountries, setSixteenCountries] = useState(
    props.sixteenCountries
  );

  return (
    <div className="cardSpace">
      {props.sixteenCountries.map((country) => (
        <div>
          <img
            className="flag"
            src={`https://flagcdn.com/w160/${country[0]}.png`}
            alt=""
          />
          <p>{country[1]}</p>
        </div>
      ))}

      <button onClick={props.updateCountries}>
        Generate 16 random countries
      </button>
    </div>
  );
}
