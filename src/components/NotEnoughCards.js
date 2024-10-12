import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck }) {
  if (!deck || !deck.name) {
    return <p>Loading...</p>; // Show loading message until deck is available
  }

  return (
    <div>
      <h2>
        <span>{deck.name}</span>: <span>Not enough cards</span> 
      </h2>
      <p>
        You need at least 3 cards to study. This deck has {deck.cards.length} cards.
      </p>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
        Add Cards
      </Link>
    </div>
  );
}

export default NotEnoughCards;
