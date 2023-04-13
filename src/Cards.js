import React from "react";
import { useState, useEffect } from "react";

export default function Cards(props) {
  const [sixteenCountries, setSixteenCountries] = useState(
    props.sixteenCountries
  );

  return (
    <div>
      <ul>
        {sixteenCountries.map((e) => (
          <li>{e[1]}</li>
        ))}
      </ul>
    </div>
  );
}
