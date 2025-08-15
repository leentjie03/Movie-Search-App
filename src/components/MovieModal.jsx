import styles from '../App.module.css';

export default function MovieModal({ movie, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : '/placeholder.jpg'
            }
            alt={movie.title}
            className={styles.modalImage}
          />
          <div className={styles.modalInfo}>
            <h2 className={styles.modalTitle}>{movie.title}</h2>
            <p className={styles.modalRating}>⭐ {movie.vote_average?.toFixed(1)}</p>
            <p className={styles.modalDate}>📅 {movie.release_date}</p>
            <p className={styles.modalDescription}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}