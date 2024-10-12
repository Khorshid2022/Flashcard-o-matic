import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api/index"; 
import Breadcrumbs from "../components/Breadcrumbs";
import { DeckInfo } from "../components/DeckInfo";
import DeckActions from "../components/DeckActions";
import CardList from "../components/CardList";

function DeckScreen() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await readDeck(deckId);
      setDeck(response);
    };
    fetchDeck();
  }, [deckId]);

  const handleDeleteDeck = async () => {
    const confirmDelete = window.confirm("Delete this deck?");
    if (confirmDelete) {
      await deleteDeck(deckId);
      window.location = "/";
    }
  };

  const handleDeleteCard = async (cardId) => {
    const confirmDelete = window.confirm("Delete this card?");
    if (confirmDelete) {
      await deleteCard(cardId); // Call the deleteCard API
      // Refresh the deck after deletion
      const updatedDeck = await readDeck(deckId);
      setDeck(updatedDeck);
    }
  };

  if (!deck) return <p>Loading...</p>;

  return (
    <div>
      <Breadcrumbs deck={deck} pageName={deck.name} />
      <DeckInfo deck={deck} />
      <DeckActions deckId={deckId} handleDeleteDeck={handleDeleteDeck} />
      <CardList cards={deck.cards} handleDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default DeckScreen;
