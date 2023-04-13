import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.css";

export default function Cards(props) {
  const [sixteenCountries, setSixteenCountries] = useState(
    props.sixteenCountries
  );

  testarray = [
    ["cd", "DR CONGO"],
    ["fr", "FRANCE"],
  ];

  const list = testarray.map((country) => (
    <div>
      <img
        className="flag"
        src={`https://flagcdn.com/w160/${country[0]}.png`}
        alt=""
      />
      <p>{country[1]}</p>
    </div>
  ));

  return (
    <div className="cardSpace">
      <div>
        <img className="flag" src="https://flagcdn.com/w160/za.png" alt="" />
        <p>South Africa</p>
      </div>
      <div>
        <img className="flag" src="https://flagcdn.com/w160/fr.png" alt="" />
        <p>France</p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
  );
}
