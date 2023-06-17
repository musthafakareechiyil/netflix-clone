import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % movies.length;
        return nextIndex;
      });
    }, 6000);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [movies.length]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="banner" style={{ backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})` }}>
      <div className="content">
        <h1 className="title">{currentMovie ? currentMovie.title : ''}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{currentMovie ? currentMovie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
