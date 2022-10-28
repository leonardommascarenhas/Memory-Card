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
      setScored([]);
      apiRequest();
      setScore(0);
    }
  }, [score]);

  useEffect(() => {
    apiRequest();
  }, []);

  useEffect(() => {
    console.log(check);
    if (scored.includes(check) == true) {
      fail();
    } else {
      setScore((current) => current + 1);
      setScored((current) => [...current, check]);
    }
  }, [check]);

  useEffect(() => {
    console.log(scored);
  }, [scored]);

  useEffect(() => {
    setScore(0);
  }, []);

  function handleClick(e) {
    let getDogBreed = e.target.src.split("/")[4];
    if (getDogBreed == scored[scored.length - 1]) {
      return fail();
    }
    setCheck(getDogBreed);
    console.log(check);
    newOrder();
  }

  function newOrder() {
    const nextOrder = [...order];
    nextOrder.sort(() => Math.random() - 0.5);
    setOrder(nextOrder);
  }

  function fail() {
    console.log("fail");
    setScore(0);
    setOrder([]);
    setOrder([]);
    apiRequest();
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
