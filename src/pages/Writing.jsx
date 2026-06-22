import { useParams, Link, Navigate } from 'react-router-dom';
import { writings } from '../writings/index.js';
import Leaf from '../components/Leaf.jsx';

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Writing() {
  const { slug } = useParams();
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) return <Navigate to="/browse" replace />;

  const { title, category, date, Content } = writing;

  return (
    <div className="writing-page">
      <Link to="/browse" className="back-link">← All writing</Link>
      <div className="writing-header">
        <h1 className="writing-page-title">{title}</h1>
        <p className="writing-meta">
          <span>{category}</span>
          <span className="meta-sep">·</span>
          <span>{formatDate(date)}</span>
        </p>
        <div className="leaf-wrap left" style={{ marginTop: '1.25rem' }}>
          <Leaf size={18} />
        </div>
      </div>
      <Content />
    </div>
  );
}
