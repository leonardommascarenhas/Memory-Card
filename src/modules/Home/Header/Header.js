import React from "react";
import Scoreboard from "../../../components/Scoreboard/Scoreboard";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Memory Game</h1>
      <Scoreboard />
    </header>
  );
};

export default Header;
