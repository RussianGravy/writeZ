import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">Marcus Writes</NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/browse" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Browse
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
