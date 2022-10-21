import { useState, useEffect } from "react";
import "./Card.css";

const Card = (name, image, age) => {
  // const [dogImage, setdogImage] = useState('');
  // const [dogBreed, setDogBreed] = useState('');
  // function apiRequest() {
  //   fetch(`https://dog.ceo/api/breeds/image/random`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setdogImage(data.message);
  //       let breed = data.message.split("/")[4];
  //       setDogBreed(breed);
  //     });
  // }
  // useEffect(() => {
  //   apiRequest();
  // }, []);

  return (
      <div className="dogCard">
        <img className="dogImage" src={image} alt="doggo"></img>
        <p>{}, {}</p>
      </div>
  );
};

export default Card;
