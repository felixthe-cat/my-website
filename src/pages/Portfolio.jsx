function Portfolio() {
  const projects = [
    { title: 'Project Alpha', description: 'An early exploration into agentic systems.' },
    { title: 'Hermes Agent Integration', description: 'Optimizing and migrating Hermes to DeepSeek V4.' },
    { title: 'Knowledge Sync Pipeline', description: 'Automating Notion to Obsidian sync.' },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient">What I Have Done</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>A selection of my recent work and experiments.</p>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel">
            <h3>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
