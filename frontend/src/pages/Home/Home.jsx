import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ImgSlider from '../../Components/Slider/Slider';
import MoviesByGenre from '../../Components/MoviesByGenre/MoviesByGenre';
import MovieList from '../../Components/MovieList/MovieList';

const Home = () => {
  const genreId = 80;

  return (
    <div className="home">
      
      <ImgSlider />

      <div className="p-8 px-8 md:px-16">
        <h2 className="text-white text-lg md:text-xl mb-4">Recommended for you</h2>
        <MovieList genreId={genreId} index_={0} />
      </div>

      <MoviesByGenre />

      <div className="p-8 px-8 md:px-16">
        <h2 className="text-white text-lg md:text-xl mb-4">Because you liked <b>Spider-Man : Homecoming</b></h2>
        {/* Pass the query to fetch Spider-Man movies */}
        <MovieList query="Spider-Man" index_={1} />
      </div>

    </div>
  );
};

export default Home;
