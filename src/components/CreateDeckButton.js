import React from "react";
import { Link } from "react-router-dom";

function CreateDeckButton() {
  return (
    <Link to="/decks/new" className="btn btn-success mb-3">
      + Create Deck
    </Link>
  );
}

export default CreateDeckButton;
