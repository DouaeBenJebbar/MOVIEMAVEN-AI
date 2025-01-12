import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import MovieCard from "../MovieCard/MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId, query }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    if (query) {
      // Fetch movies by search query
      fetchMoviesByQuery();
    } else if (genreId) {
      // Fetch movies by genre ID
      fetchMoviesByGenreId();
    }
  }, [genreId, query]);

  const fetchMoviesByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const fetchMoviesByQuery = () => {
    GlobalApi.searchMovies(query).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px]"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[150px]"
      />
    </div>
  );
}

export default MovieList;
