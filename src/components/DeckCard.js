import React from "react";
import { Link } from "react-router-dom";

function DeckCard({ deck, handleDeleteDeck }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-text">{deck.cards.length} cards</p>
        <p >{deck.description}</p>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary" style={{margin: 4}}>
          Study
        </Link>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary" style={{margin: 4}}>
          View
        </Link>
        <button className="btn btn-danger" onClick={() => handleDeleteDeck(deck.id)} style={{margin: 4}}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckCard;
