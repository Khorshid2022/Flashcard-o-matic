import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index";
import Breadcrumbs from "../components/Breadcrumbs";
import DeckForm from "../components/DeckForm";

function EditDeckScreen() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await readDeck(deckId);
      setDeck(response);
    };
    fetchDeck();
  }, [deckId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDeck(deck);
    navigate(`/decks/${deck.id}`);
  };

  if (!deck) return <p>Loading...</p>;

  return (
    <div>
      <Breadcrumbs deck={deck} pageName="Edit Deck" />
      <h2>Edit Deck</h2>
      <DeckForm deck={deck} setDeck={setDeck} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditDeckScreen;
