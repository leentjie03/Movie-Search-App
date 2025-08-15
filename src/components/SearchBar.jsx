import styles from '../App.module.css';

export default function SearchBar({ setQuery }) {
  return (

    <section id="search" className="search-section">
      <div className="search-container">
        <div className="search-content">
          <input
            type="text"
            placeholder="Search for movies..."
            className={styles.searchBar}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}