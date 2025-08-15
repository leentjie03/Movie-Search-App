import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${query}`
        )
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>🎬 Movie Search</h1>
      {!query && (
        <div className={styles.welcome}>
          <h2 className={styles.welcomeTitle}>Welcome to Movie Search!</h2>
          <p className={styles.welcomeText}>Discover your favorite movies and explore new ones</p>
        </div>
      )}
      <SearchBar setQuery={setQuery} />
      {loading && <div className={styles.loading}>Searching movies...</div>}
      {!loading && movies.length === 0 && query && (
        <div className={styles.noResults}>No movies found for "{query}"</div>
      )}
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} />
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;