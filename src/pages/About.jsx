function About() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient">My Direction & Plans</h1>
      
      <div className="grid" style={{ marginTop: '3rem' }}>
        <div className="glass-panel">
          <h3>The ADI Direction</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            I believe that Artificial General Intelligence (ADI) is the key to unlocking the next phase of human evolution. My focus is on building robust, scalable, and agentic workflows that bridge the gap between simple automation and true artificial reasoning.
          </p>
        </div>

        <div className="glass-panel">
          <h3>Future Plans</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>Deep integration of agentic workflows into daily operations.</li>
            <li>Exploring multi-agent orchestration.</li>
            <li>Building scalable knowledge graphs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
