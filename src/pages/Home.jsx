import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero animate-fade-in">
      <h1 className="text-gradient">Designing the Future of ADI.</h1>
      <p>
        Welcome to my personal space. Here, I document my direction in Artificial General Intelligence (ADI), 
        my plans, what I have built, and my unfiltered opinions on the industry.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/about" className="btn-primary">My Direction</Link>
        <Link to="/portfolio" className="btn-primary" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>View Work</Link>
      </div>
    </div>
  );
}

export default Home;
