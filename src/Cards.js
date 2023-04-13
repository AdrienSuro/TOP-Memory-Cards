import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.css";

export default function Cards(props) {
  const [sixteenCountries, setSixteenCountries] = useState(
    props.sixteenCountries
  );

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
