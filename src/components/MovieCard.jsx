import styles from '../App.module.css';

export default function MovieCard({ movie, onSelect }) {
  return (
    <div className={styles.movieCard} onClick={() => onSelect(movie)}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '/placeholder.jpg'
        }
        alt={movie.title}
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <p className={styles.movieRating}>⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
}