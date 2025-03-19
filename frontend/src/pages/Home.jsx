import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "John Wick", year: 2020 },
    { id: 2, title: "Terminator", year: 1999 },
    { id: 3, title: "The Matrix", year: 1998 },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
