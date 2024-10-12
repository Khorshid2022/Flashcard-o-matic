import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/";
import Breadcrumbs from "../components/Breadcrumbs";
import CardFlipper from "../components/CardFlipper";
import NotEnoughCards from "../components/NotEnoughCards";

function StudyScreen() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await readDeck(deckId);
      setDeck(response);
    };
    fetchDeck();
  }, [deckId]);

  if (!deck) return <p>Loading...</p>;
  if (deck.cards.length < 3) return <NotEnoughCards deck={deck} />;

  // Function to handle card index changes
  const handleCardChange = (index) => {
  };

  return (
    <div>
      <Breadcrumbs deck={deck} pageName="Study" />
      <h2>Study: {deck.name}</h2>
      <CardFlipper cards={deck.cards} onCardChange={handleCardChange} />
    </div>
  );
}

export default StudyScreen;
