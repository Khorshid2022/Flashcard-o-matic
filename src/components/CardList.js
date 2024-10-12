import React from "react";
import Card from "./Card";

function CardList({ cards, handleDeleteCard }) { // Accept handleDeleteCard
  if (!cards || cards.length === 0) {
    return <p>No cards available in this deck.</p>;
  }

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} handleDelete={handleDeleteCard} />
      ))}
    </div>
  );
}

export default CardList;
