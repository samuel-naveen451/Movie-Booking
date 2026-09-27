import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-badge">🎬 Now Showing in 4K IMAX</span>
        <h1>Experience Movies Like Never Before</h1>
        <p>Book tickets for the latest blockbusters instantly with Cinema Pass.</p>
        <div className="hero-buttons">
          <Link to="/movies" className="btn-primary">Browse Movies 🍿</Link>
          <Link to="/booking" className="btn-secondary">Quick Book 🎟️</Link>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="stats-bar">
        <div className="stat-card">
          <h2>50+</h2>
          <p>Screens</p>
        </div>
        <div className="stat-card">
          <h2>4K</h2>
          <p>Dolby Vision</p>
        </div>
        <div className="stat-card">
          <h2>100k+</h2>
          <p>Tickets Booked</p>
        </div>
      </section>

      {/* Featured Teaser Cards */}
      <section className="featured-section">
        <h2>🔥 Trending Blockbusters</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <span className="rating">⭐ 8.8</span>
            <h3>Inception</h3>
            <p>Sci-Fi / Action • 2h 28m</p>
            <Link to="/booking" className="card-link">Book Now →</Link>
          </div>
          <div className="featured-card">
            <span className="rating">⭐ 8.7</span>
            <h3>Interstellar</h3>
            <p>Sci-Fi / Drama • 2h 49m</p>
            <Link to="/booking" className="card-link">Book Now →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;