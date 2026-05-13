import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      if (!supabase) {
        setError('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient">Opinions & Blog</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        My unfiltered thoughts on ADI, tech, and everything else.
      </p>

      {loading ? (
        <p>Loading opinions...</p>
      ) : error ? (
        <div className="glass-panel" style={{ borderColor: 'rgba(239, 68, 68, 0.5)' }}>
          <h3 style={{ color: '#f87171' }}>Connection Error</h3>
          <p>{error}</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="glass-panel">
          <p>No opinions posted yet.</p>
        </div>
      ) : (
        <div className="grid">
          {posts.map((post) => (
            <div key={post.id} className="glass-panel">
              <h3>{post.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
