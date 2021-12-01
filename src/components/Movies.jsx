import Movie from './Movie';

function Movies({ movies }) {
  const IS_ARRAY = Array.isArray(movies);
  return (
    <div className='movies'>
      {IS_ARRAY ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}

export default Movies;
