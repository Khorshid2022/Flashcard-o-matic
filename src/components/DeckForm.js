import React from "react";
import { useNavigate } from "react-router-dom"; 

function DeckForm({ deck, setDeck, onSubmit }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setDeck({
      ...deck,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Deck Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={deck.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={deck.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{margin: 6}}>
        Submit
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default DeckForm;
