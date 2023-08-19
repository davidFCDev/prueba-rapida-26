function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.imdbID} className="movie">
          <h2 className="movie__title">{movie.Title}</h2>
          <p className="movie__year">{movie.Year}</p>
          <img className="movie__poster" src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p className="message">No hay películas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
