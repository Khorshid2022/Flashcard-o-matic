import React from "react"
import { useNavigate } from "react-router-dom"


function CardForm({ card, setCard, onSubmit }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  }
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          value={card.front}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          value={card.back}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{margin: 6}}>
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default CardForm;
