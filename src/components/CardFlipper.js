import React, { useState, useEffect } from "react";

function CardFlipper({ cards, onCardChange }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  const handleNext = () => {
    // Move to the next card and reset the flip state
    setIsFlipped(false);
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      alert("You've reached the end of the deck! Resetting to the first card.");
      setCurrentCardIndex(0); // Reset to the first card after the alert
    }
  };

  // Notify parent component when the card index changes
  useEffect(() => {
    onCardChange(currentCardIndex);
  }, [currentCardIndex, onCardChange]);

  return (
    <div className="card">
      <div className="card-body">
        {/* Display current card count */}
        <p>Card {currentCardIndex + 1} of {cards.length}</p>
        
        {/* Conditionally show the front or back of the card based on flip state */}
        <p className="card-text">{isFlipped ? currentCard.back : currentCard.front}</p>

        {/* Flip button */}
        <button className="btn btn-secondary mr-2" onClick={handleFlip}>
          Flip
        </button>

        {/* Conditionally render the Next button only if the card is flipped */}
        {isFlipped && (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default CardFlipper;
