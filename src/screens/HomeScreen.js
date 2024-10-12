import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";
import DeckCard from "../components/DeckCard";
import CreateDeckButton from "../components/CreateDeckButton";

function HomeScreen() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await listDecks();
      setDecks(response);
    };
    fetchDecks();
  }, []);

  const handleDeleteDeck = async (deckId) => {
    const confirmDelete = window.confirm("Delete this deck?");
    if (confirmDelete) {
      await deleteDeck(deckId);
      setDecks(decks.filter((deck) => deck.id !== deckId));
    }
  };

  return (
    <div>
      <CreateDeckButton />
      {decks.map((deck) => (
        <DeckCard key={deck.id} deck={deck} handleDeleteDeck={handleDeleteDeck} />
      ))}
    </div>
  );
}

export default HomeScreen;
