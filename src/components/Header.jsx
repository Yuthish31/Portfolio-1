import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import iconimg from '../assets/img/icon.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.replace('/#', ''));
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand-container">
        <img 
          src={iconimg} 
          alt="portfolio icon" 
          className="nav-icon"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="nav-brand">Portfolio</span>
      </div>

      <button 
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/portfolio') ? 'active' : ''}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={isActive('/achievement') ? 'active' : ''}>
          <Link to="/achievement">Achievement</Link>
        </li>
        <li className={isActive('/contact') ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;