import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css";
import uniqid from "uniqid";
import { AuthContext } from "../../providers/auth";

const GameBoard = () => {
  const [dogObj, setDog] = useState([]);
  const [order, setOrder] = useState([]);
  const { score, setScore } = React.useContext(AuthContext);

  function apiRequest() {
    let count = 0;
    while (count < 8) {
      count++;
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => res.json())
        .then((data) => {
          let breed = data.message.split("/")[4];
          let obj = { BreedDog: breed, imgSrc: data.message, id: uniqid() };
          setDog((current) => [...current, obj]);
          setOrder((current) => [...current, obj]);
        });
    }
    count = 0;
  }

  useEffect(() => {
    checkWin();
  }, [score]);

  useEffect(() => {
    apiRequest();
  }, []);

  function handleClick() {
    setScore(score + 1);
    const nextOrder = [...order];
    nextOrder.sort(() => Math.random() - 0.5);
    setOrder(nextOrder);
  }
  function checkWin() {
    if (score >= 8) {
      console.log("win");
      setOrder([]);
      setDog([]);
      setScore(0);
      apiRequest();
    }
  }

  return (
    <div className="gameBoard">
      {order.map((card) => (
        <div key={card.id} onClick={handleClick} className="dogCard">
          <Card dogImage={card.imgSrc} dogBreed={card.BreedDog} />
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
