import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { readDeck, createCard } from "../utils/api"; // Assuming createCard is used to save the card to the deck

function AddCardScreen() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({ front: "", back: "" });

  useEffect(() => {
    const loadDeck = async () => {
      const fetchedDeck = await readDeck(deckId);
      setDeck(fetchedDeck);
    };
    loadDeck();
  }, [deckId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCard(deckId, card); // Save the card
    setCard({ front: "", back: "" }); // Reset the card form after saving
  };

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>

      <h2 className="mb-4">
        <span>{deck.name}</span>: <span>Add Card</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">Front</label>
          <textarea
            id="front"
            className="form-control"
            value={card.front}
            onChange={(e) => setCard({ ...card, front: e.target.value })}
            placeholder="Enter the front side of the card"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="back" className="form-label">Back</label>
          <textarea
            id="back"
            className="form-control"
            value={card.back}
            onChange={(e) => setCard({ ...card, back: e.target.value })}
            placeholder="Enter the back side of the card"
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Save</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(`/decks/${deck.id}`)}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCardScreen;
