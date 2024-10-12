import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readCard, updateCard } from "../utils/api/index";
import Breadcrumbs from "../components/Breadcrumbs";
import CardForm from "../components/CardForm";

function EditCardScreen() {
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCard = async () => {
      const response = await readCard(cardId);
      setCard(response);
    };
    fetchCard();
  }, [cardId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCard(card);
    navigate(`/decks/${deckId}`);
  };

  if (!card) return <p>Loading...</p>;

  return (
    <div>
      <Breadcrumbs pageName="Edit Card" />
      <h2>Edit Card</h2>
      <CardForm card={card} setCard={setCard} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditCardScreen;
