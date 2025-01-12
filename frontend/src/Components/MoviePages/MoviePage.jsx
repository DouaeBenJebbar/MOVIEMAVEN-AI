import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../Services/GlobalApi'; // Import the updated GlobalApi
import './MoviePage.css';
import MovieList from '../MovieList/MovieList'; // Import MovieList here
import { FaStar, FaPlus } from 'react-icons/fa'; // Import icons

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MoviePage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false); // To toggle rating modal
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useEffect(() => {
    // Fetch movie details based on ID
    const fetchMovieDetails = async () => {
      try {
        const response = await GlobalApi.getMovieDetails(id); // Use the getMovieDetails method
        setMovieDetails(response.data); // Update state with movie details
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  if (!movieDetails) return <div>Loading...</div>; // Loading state until data is fetched
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  };
  
  return (
    <div
      className="MoviePage relative text-white"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL + movieDetails.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="relative z-10 p-8 md:px-16 flex flex-col md:flex-row items-start gap-8 mt-16">
        {/* Movie Poster */}
        <img
          src={IMAGE_BASE_URL + movieDetails.poster_path}
          alt={movieDetails.title}
          className="rounded-lg shadow-lg w-1/4 md:w-1/5"
        />
        {/* Movie Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">
            {movieDetails.title}{' '}
            <span className="text-gray-400">
              ({new Date(movieDetails.release_date).getFullYear()})
            </span>
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg flex items-center gap-1">
              <FaStar /> {movieDetails.vote_average.toFixed(1)}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">{formatRuntime(movieDetails.runtime)}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">
              {movieDetails.genres.map((genre) => genre.name).join(', ')}
            </span>
          </div>
          <p className="text-gray-300 italic mb-6">{movieDetails.tagline}</p>
          <h2 className="text-lg font-semibold mb-2">Overview</h2>
          <p className="mb-4">{movieDetails.overview}</p>
          <div className="flex items-center gap-4">
            <button
              className="bg-gray-800 text-white p-2 px-3 rounded-full hover:bg-red-500 transition-colors flex items-center gap-2"
              title="Add to Wishlist"
            >
              <FaPlus /> Add to Wishlist
            </button>
            <button
              className="bg-gray-800 text-white p-2 px-3 rounded-full hover:bg-yellow-500 transition-colors flex items-center gap-2"
              title="Rate Movie"
              onClick={() => setShowRatingModal(true)}
            >
              <FaStar /> Rate 
            </button>
          </div>
        </div>
      </div>

      {/* Similar Movies Section */}
      <div className="relative z-10 p-8 md:px-16 mt-8">
        <h2 className="text-lg md:text-xl mb-4">Similar Movies</h2>
        <MovieList genreId={28} index_={0} />
      </div>

{/* Rating Modal */}
{showRatingModal && (
  <div className="rating-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
      {/* Exit Button (Outside the Box) */}
      <button
        className="absolute -top-7 -right-1  text-white text-xl rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition-colors"
        onClick={() => {
          if (!ratingSubmitted) {
            setRating(0); // Clear stars if no rating was submitted
          }
          setShowRatingModal(false); // Close modal
        }}
      >
        &times;
      </button>
      {/* Header Icon */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 p-4 rounded-full">
        <FaStar className="text-white text-3xl" />
      </div>
      <div className="text-center mt-8">
        {/* Rate This Section */}
        <h2 className="text-yellow-500 font-bold text-lg uppercase mb-2">
          Rate This
        </h2>
        <h3 className="text-2xl font-semibold">{movieDetails.title}</h3>
      </div>
      {/* Star Rating */}
      <div className="flex justify-center mt-6 mb-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer text-2xl mx-1 transition-colors ${
              star <= rating ? 'text-yellow-500' : 'text-gray-500'
            }`}
            onClick={() => handleRating(star)} // Set rating
          />
        ))}
      </div>
      {/* Rate Button */}
      <div className="text-center">
        <button
          className="bg-gray-600 text-white text-lg px-8 py-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={() => {
            console.log(`Rated ${movieDetails.title} ${rating} stars`);
            setRatingSubmitted(true); // Mark the rating as submitted
            setShowRatingModal(false); // Close modal
          }}
        >
          Rate
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MoviePage;
