import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import DeckForm from "../components/DeckForm";
import { createDeck } from "../utils/api/index";

function CreateDeckScreen() {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDeck = await createDeck(deck);
    navigate(`/decks/${newDeck.id}`);
  };

  return (
    <div>
      <Breadcrumbs pageName="Create Deck" />
      <h2>Create Deck</h2>
      <DeckForm deck={deck} setDeck={setDeck} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateDeckScreen;
