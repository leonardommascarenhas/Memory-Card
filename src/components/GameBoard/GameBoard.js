import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
const GameBoard = () => {
  const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  return <>{cards}</>;
};

export default GameBoard;
