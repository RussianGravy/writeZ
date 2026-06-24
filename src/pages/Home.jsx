import { Link } from 'react-router-dom';
import Leaf from '../components/Leaf.jsx';
import { writings } from '../writings/index.js';

const ordinals = ['1st', '2nd', '3rd'];

const featured = writings.slice(0, 3);
export default function Home() {

  console.log(writings);
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Marcus Writez</h1>
        <div className="leaf-wrap">
          <Leaf size={22} />
        </div>
        <p className="hero-subtitle">Poems, reflections, and short pieces.</p>
        <Link to="/browse" className="btn">Read the Writing</Link>
      </div>

      <section className="home-section">
        <div className="section-header">
          <div className="leaf-wrap">
            <Leaf size={18} />
          </div>
          <h2 className="section-title">Featured Writing</h2>
        </div>
        <div className="featured-grid">
          {featured.map((w, i) => (
            <Link key={w.slug} to={`/writing/${w.slug}`} className="featured-card">
              <span className="card-num">{ordinals[i]}</span>
              <h3 className="card-title">{w.title}</h3>
              <p className="card-desc">{w.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <div className="leaf-wrap">
            <Leaf size={18} />
          </div>
          <h2 className="section-title">About</h2>
        </div>
        <p className="home-about-text">
          This site is a simple home for Marcus's writing.
        </p>
        <div className="leaf-wrap" style={{ marginTop: '2rem' }}>
          <Leaf size={16} />
        </div>
      </section>
    </>
  );
}
