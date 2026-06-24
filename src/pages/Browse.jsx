import { Link } from 'react-router-dom';
import Leaf from '../components/Leaf.jsx';
import { writings } from '../writings/index.js';

export default function Browse() {
  return (
    <div className="browse-page">
      <div>
        <h1 className="page-title">Browse</h1>
        <div className="leaf-wrap left" style={{ marginTop: '0.5rem' }}>
          <Leaf size={18} />
        </div>
        <p className="page-subtitle">All poems, reflections, and short pieces.</p>
      </div>

      <div className="writings-list">
        {writings.map((w) => (
          <div key={w.slug} className="writing-row">
            <Link to={`/writing/${w.slug}`} className="writing-title">{w.title}</Link>
            <span className="writing-excerpt">{w.excerpt}</span>
            <span className="writing-category">{w.category}</span>
            <span className="writing-date">{w.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
