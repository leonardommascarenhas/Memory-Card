import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ dogImage, dogBreed }) => {
  return (
    <>
      <img className="dogImage" src={dogImage} alt="doggo"></img>
      <p>{dogBreed}</p>
    </>
  );
};

export default Card;
