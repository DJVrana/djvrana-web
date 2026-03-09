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
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <NavLink className="logo" to={'/'}>
          DJ VRANA
        </NavLink>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.page}>
              <NavLink
                to={'/' + link.page}
                className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                data-page={link.page}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
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
