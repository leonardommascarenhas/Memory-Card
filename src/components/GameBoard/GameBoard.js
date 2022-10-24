import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css";

let initialCards = [
  <Card key={1} />,
  <Card key={2} />,
  <Card key={3} />,
  <Card key={4} />,
  <Card key={5} />,
  <Card key={6} />,
];

const GameBoard = () => {
  const [order, setOrder] = useState(initialCards);

  function handleClick() {
    const nextOrder = [...order];
    nextOrder.sort(() => Math.random() - 0.5);
    setOrder(nextOrder);
  }

  let card = document.querySelectorAll(".dogCard");
  card.forEach((card) =>
    card.addEventListener("click", () => console.log(card))
  );
  return <div className="gameBoard">{order}</div>;
};

export default GameBoard;
