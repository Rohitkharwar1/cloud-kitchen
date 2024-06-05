// src/Components/CardsList.jsx
import React from "react";
import CardComponent from "./Card";
import cardsData from "../utils/cardsData";
import "./CardsList.css";

const CardsList = () => {
  // Ensure there are at least three unique cards available
  const uniqueCards = Array.from(new Set(cardsData));
  const displayedCards = uniqueCards.slice(0, 1);

  return (
    <div className="cards-container">
      {displayedCards.map((card) => (
        <CardComponent card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardsList;
