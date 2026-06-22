import Leaf from '../components/Leaf.jsx';

export default function About() {
  return (
    <div className="about-page">
      <h1 className="page-title">About</h1>
      <div className="leaf-wrap left" style={{ margin: '0.75rem 0 0' }}>
        <Leaf size={18} />
      </div>
      <div className="about-body">
        <p>This site is a simple home for Marcus's writing. Poems, reflections, and short pieces—written slowly and shared when they're ready.</p>
        <p>Marcus writes because it helps him think, feel, and notice. Not for an audience in particular, but for whoever happens to find their way here.</p>
        <p>If something resonated with you, that's enough.</p>
      </div>
    </div>
  );
}
