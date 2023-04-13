import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.css";

export default function Scoreboard(props) {
  return (
    <div className="scoreboardSpace">
      <h2>Current score : {props.currentScore}</h2>
      <h2>Highest score : {props.highestScore}</h2>
    </div>
  );
}
