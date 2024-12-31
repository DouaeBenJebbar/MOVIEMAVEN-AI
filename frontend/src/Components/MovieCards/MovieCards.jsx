import React, { useEffect, useRef } from 'react';
import './MovieCards.css';
import cards_data from '../../assets/cards/Cards_data';

const MovieCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();

    const scrollSpeed = 3; // Adjust this multiplier for faster/slower scrolling
    cardsRef.current.scrollBy({
      left: event.deltaY * scrollSpeed,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const currentRef = cardsRef.current;

    currentRef.addEventListener('wheel', handleWheel);

    // Clean up event listener on component unmount
    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="movie_cards">
      <h2>{title?title:"Popular Movies"}</h2>
      <div className="cards_list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
