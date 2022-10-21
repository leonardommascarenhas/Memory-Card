import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = () => {
  const [dogImage, setdogImage] = useState(null);
  const [dogBreed, setDogBreed] = useState(null);
  function apiRequest() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => {
        setdogImage(data.message);
        let breed = data.message.split("/")[4];
        setDogBreed(breed);
      });
  }
  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <>
      <button onClick={apiRequest}></button>
      <div className="dogCard">
        {dogImage && (
          <img className="dogImage" src={dogImage} alt="doggo"></img>
        )}
        <p>{dogBreed}</p>
      </div>
    </>
  );
};

export default Card;
