function Movie(props) {
  const {
    Title: title,
    Year: year,
    Type: type,
    Poster: poster,
    imdbID,
  } = props;
  return (
    <div id={imdbID} className='card card__margin_zero'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img
          className='activator'
          src={
            poster === 'N/A'
              ? `http://dummyimage.com/305x435/99cccc.gif&text=${title}`
              : poster
          }
          alt={title}
        />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year} <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
