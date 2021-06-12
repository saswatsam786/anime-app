import React, { useEffect, useState } from "react";
import "./centerCards.css";
import SwipeCard from "react-tinder-card";
import SwishSound from "./swish.m4a";
import axios from "./axios.js";

function CenterCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/anime/cards");

      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameDelete) => {
    console.log(`removing: ${nameDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  const sound = new Audio(SwishSound);

  const swishFunc = () => {
    sound.play();
  };

  return (
    <div className="centerCards">
      <div className="cardContainer">
        {people.map((person) => (
          <SwipeCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={((dir) => swiped(dir, person.name), () => swishFunc())}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              id="card"
              style={{ backgroundImage: `url("${person.imgUrl}")` }}
            >
              <h3>{person.name}</h3>
            </div>
          </SwipeCard>
        ))}
      </div>
    </div>
  );
}

export default CenterCards;
