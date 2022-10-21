import { useEffect, useState } from "react";
import Card from "../Card/Card";
import data from './cardData.json';

const GameBoard = () => {

  let dogs = Object.values(data.dogs)
  let allDogs = [...new Set(dogs.map(i => [i.name, i.age, i.image]))]
  return (
    <>
    {
      allDogs.map((i, index) => {
        return <Card key={`aopsdkpaosdksa${index}`} name={i[0]} image={i[2]} age={i[2]}/>
      })
    }
    </>
  );

};

export default GameBoard;
