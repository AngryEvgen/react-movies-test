import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async (str = 'halloween', type = 'all') => {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      );
      let data = await res.json();

      setMovies(data.Search);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='container content'>
      <Search filterByMovies={getData} />
      {isLoaded ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
}

export default Main;
