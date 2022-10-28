import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css";
import uniqid from "uniqid";
import { AuthContext } from "../../providers/auth";

const GameBoard = () => {
  const [check, setCheck] = useState("");
  const [scored, setScored] = useState([]);
  const [order, setOrder] = useState([]);
  const { score, setScore } = React.useContext(AuthContext);

  function apiRequest() {
    let count = 0;
    while (count < 8) {
      console.log(count);
      count++;
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => res.json())
        .then((data) => {
          let breed = data.message.split("/")[4];
          let obj = { BreedDog: breed, imgSrc: data.message, id: uniqid() };
          setOrder((current) => [...current, obj]);
        });
    }
    count = 0;
  }

  useEffect(() => {
    if (score % 8 == 0 && score > 0) {
      console.log("win");
      setOrder([]);
      apiRequest();
      setScore(0);
    }
  }, [score]);

  useEffect(() => {
    apiRequest();
  }, []);

  useEffect(() => {
    if (scored.includes(check)) {
      return console.log("fail");
    } else {
      console.log(scored);
      setScored((current) => [...current, check]);
      setScore((current) => current + 1);
    }
  }, [check]);

  function handleClick(e) {
    let getDogBreed = e.target.src.split("/")[4];
    setCheck(getDogBreed);
    const nextOrder = [...order];
    nextOrder.sort(() => Math.random() - 0.5);
    setOrder(nextOrder);
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
