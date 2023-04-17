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
        <div
          key={country}
          className="countryContainer"
          onClick={(event) => {
            event.currentTarget.setAttribute("class", "scaleImage");
            console.log(event.currentTarget);
            setTimeout(() => props.onCountryClick(country[0]), 500);
          }}
        >
          <img
            className="flag"
            src={`https://flagcdn.com/w160/${country[0]}.png`}
            alt=""
          />
          <p className="countryname">{country[1]}</p>
        </div>
      ))}

      <button onClick={props.updateCountries}>
        Generate 16 random countries
      </button>
    </div>
  );
}
