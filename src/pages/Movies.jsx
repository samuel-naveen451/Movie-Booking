function MovieCard(props) {
  return (
    <div className="movie-card">
      <h2>{props.title}</h2>
      <p>🎭 Genre: {props.genre}</p>
      <p>⏳ Duration: {props.duration}</p>
      <button>Book Now</button>
    </div>
  );
}

function Movies() {
  return (
    <main className="movies-page">
      <h1>Now Showing</h1>
      <div className="movies-grid">
        <MovieCard
          title="Inception"
          genre="Sci-Fi / Action"
          duration="2h 28m"
        />
        <MovieCard
          title="Interstellar"
          genre="Sci-Fi / Drama"
          duration="2h 49m"
        />
      </div>
    </main>
  );
}

export default Movies;