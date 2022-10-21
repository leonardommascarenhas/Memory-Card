import React, { useState, useEffect } from "react";
import "./";

const App = () => {
  const [dogImage, setdogImage] = useState(null);
  const [dogBreed, setDogBreed] = useState(null);
  function apiRequest() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdogImage(data.message);
        let breed = data.message.split("/")[4];
        console.log(breed);
      });
  }
  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <>
      <button onClick={apiRequest}></button>
      <div className="dog">
        {dogImage && (
          <img className="dogImage" src={dogImage} alt="doggo"></img>
        )}
      </div>
    </>
  );
};

export default App;
