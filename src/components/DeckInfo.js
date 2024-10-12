import React from "react";

export const DeckInfo = ({ deck }) => {
  return (
    <div className="deck-info">
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
      <p>{deck.cards.length} cards</p> 
    </div>
  );
};
