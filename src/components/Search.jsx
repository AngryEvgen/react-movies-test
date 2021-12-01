import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: '',
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleChecked = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchOnKey = (event) => {
    if (event.key === 'Enter') {
      this.props.filterByMovies(this.state.search, this.state.type);
    }
  };

  searchOnClick = () => {
    this.props.filterByMovies(this.state.search, this.state.type);
  };

  render() {
    const { search } = this.state;
    return (
      <div className='row'>
        <div className='input-field col s12'>
          <input
            placeholder='Search'
            id='search'
            type='text'
            className='validate'
            value={search}
            onChange={this.handleChange}
            onKeyUp={this.searchOnKey}
          />
          <button
            className='waves-effect waves-light btn-small btn-small_position'
            onClick={this.searchOnClick}
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
                  onChange={this.handleChecked}
                  checked={this.state.type === 'all'}
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
                  onChange={this.handleChecked}
                  checked={this.state.type === 'movie'}
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
                  onChange={this.handleChecked}
                  checked={this.state.type === 'series'}
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
                  onChange={this.handleChecked}
                  checked={this.state.type === 'game'}
                />
                <span>Games</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
