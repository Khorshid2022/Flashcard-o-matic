import React from "react";
import { Link } from "react-router-dom";

function Card({ card, handleDelete }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{card.front}</h5>
        <p className="card-text">{card.back}</p>
        <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`} style={{margin: 6}}>
          <button className="btn btn-primary me-2">Edit</button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(card.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
