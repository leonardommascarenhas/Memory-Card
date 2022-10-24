import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css";
import uniqid from "uniqid";
const GameBoard = () => {
  let initialState = [];
  const [dogObj, setDog] = useState([]);
  const [order, setOrder] = useState([]);
  function apiRequest() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => {
        let breed = data.message.split("/")[4];
        let obj = { BreedDog: breed, imgSrc: data.message, id: uniqid() };
        setDog((current) => [...current, obj]);
        setOrder((current) => [...current], obj);
      });
  }
  useEffect(() => {
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    apiRequest(initialState);
    console.log(dogObj);
  }, []);

  function handleClick() {
    console.log(order);
    const nextOrder = [...order];
    nextOrder.sort(() => Math.random() - 0.5);
    setOrder(nextOrder);
  }

  return (
    <div className="gameBoard">
      <button
        onClick={() => {
          apiRequest(initialState);
          console.log(dogObj);
        }}
      ></button>
      {dogObj.map((card) => (
        <div key={card.id} onClick={handleClick}>
          <Card dogImage={card.imgSrc} dogBreed={card.BreedDog} />
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
