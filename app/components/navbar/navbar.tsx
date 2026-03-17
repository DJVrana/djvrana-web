import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { page: '', label: 'Početna' },
    { page: 'o-meni', label: 'O meni' },
    { page: 'usluge', label: 'Usluge' },
    { page: 'galerija', label: 'Galerija' },
    { page: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`} aria-label="Glavna navigacija">
      <div className="nav-container">
        <NavLink className="logo" to={'/'} aria-label="DJ Vrana - Naslovnica">
          DJ VRANA
        </NavLink>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
        >
          {isMobileMenuOpen ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          )}
        </button>

        <ul id="mobile-menu" className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.page}>
              <NavLink
                to={'/' + link.page}
                className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onNavigate) onNavigate(link.page);
                }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
