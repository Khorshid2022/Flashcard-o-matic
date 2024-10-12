import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DeckActions({ deckId, handleDeleteDeck }) {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate(`/decks/${deckId}/cards/new`);
  };

  const handleEditDeck = () => {
    navigate(`/decks/${deckId}/edit`);
  };

  return (
    <div className="deck-actions">
      {/* Edit Deck Button */}
      <button className="btn btn-secondary" onClick={handleEditDeck}>
        Edit Deck
      </button>

      {/* Study Deck Button */}
      <Link to={`/decks/${deckId}/study`} className="btn btn-primary ml-2">
        Study Deck
      </Link>

      {/* Add Card Button */}
      <button className="btn btn-primary ml-2" onClick={handleAddCard}>
        Add Cards
      </button>

      {/* Delete Deck Button */}
      <button className="btn btn-danger ml-2" onClick={handleDeleteDeck}>
        Delete Deck
      </button>
    </div>
  );
}

export default DeckActions;
