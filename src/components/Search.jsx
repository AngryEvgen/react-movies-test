import React, { useState } from 'react';

function Search({ filterByMovies }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChecked = (event) => {
    setType(event.target.value);
  };

  const searchOnKey = (event) => {
    if (event.key === 'Enter') {
      filterByMovies(search, type);
    }
  };

  const searchOnClick = () => {
    filterByMovies(search, type);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          placeholder='Search'
          id='search'
          type='text'
          className='validate'
          value={search}
          onChange={handleChange}
          onKeyUp={searchOnKey}
        />
        <button
          className='waves-effect waves-light btn-small btn-small_position'
          onClick={searchOnClick}
        >
          Search
        </button>
        <div className='filter'>
          <p>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='all'
                onChange={handleChecked}
                checked={type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='movie'
                onChange={handleChecked}
                checked={type === 'movie'}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='series'
                onChange={handleChecked}
                checked={type === 'series'}
              />
              <span>Series</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='game'
                onChange={handleChecked}
                checked={type === 'game'}
              />
              <span>Games</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
