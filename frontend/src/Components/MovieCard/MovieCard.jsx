import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    // Navigate to the movie detail page when the card is clicked
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="relative group w-[110px] md:w-[200px] h-auto flex-shrink-0"
      onClick={handleClick} // Add onClick event to navigate
    >
      {/* Movie Poster */}
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto rounded-lg hover:border-[4px]
        border-gray-400 transition-all duration-100 ease-in"
      />
    </div>
  );
}

export default MovieCard;
