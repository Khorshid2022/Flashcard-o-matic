import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function DeleteDeck() {
  const { deckId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteDeck(deckId);
      navigate("/"); // Redirect to home or decks page after deletion
    } catch (error) {
      console.error("Failed to delete deck:", error);
    }
  };

  return (
    <div>
      <h2>Delete Deck</h2>
      <p>Are you sure you want to delete this deck? This action cannot be undone.</p>
      <button onClick={handleDelete}>Delete Deck</button>
      <button onClick={() => navigate(`/decks/${deckId}`)}>Cancel</button>
    </div>
  );
}

export default DeleteDeck;
