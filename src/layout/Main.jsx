import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    isLoaded: false,
  };

  getData = async (str = 'halloween', type = 'all') => {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      );
      let data = await res.json();

      this.setState({ movies: data.Search, isLoaded: true });
    } catch (error) {
      console.log(error);
      this.setState({ isLoaded: false });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { movies, isLoaded } = this.state;
    return (
      <main className='container content'>
        <Search filterByMovies={this.getData} />
        {isLoaded ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
