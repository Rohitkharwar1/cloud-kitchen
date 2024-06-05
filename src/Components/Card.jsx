import React, { useState } from "react";
import cardsData from "../utils/cardsData";
import "./Card.css";

const CardComponent = ({ card }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
  const addToCart = () => {
    console.log(`Added ${card.title} to cart`);
  };

  return (
    <div className="card" key={card.id}>
      <figure>
        <img src={card.image} alt={card.title} />
      </figure>
      <div className="card-body">
        <div className="cardID">
          <h2 className="card-title">
            {card.title}{" "}
            <span className={card.isVeg ? "veg-badge" : "non-veg-badge"}>
              {card.isVeg ? "Veg" : "Non-Veg"}
            </span>
          </h2>
          <div className="quantity-control">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
        </div>
        <p>{card.description}</p>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{ color: index < card.rating ? "gold" : "gray" }}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const CardsList = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <CardComponent card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardsList;
