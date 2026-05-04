import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { NavLink, useLocation, useNavigate } from 'react-router';
import * as m from '~/paraglide/messages.js';
import { getLocale } from '~/paraglide/runtime.js';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultLang = 'hr';

  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlLocale = window.location.pathname.split('/')[1];
      if (urlLocale === 'en' || urlLocale === 'hr') {
        return urlLocale;
      }
    }
    return getLocale() || defaultLang;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const urlLocale = location.pathname.split('/')[1];
    
    if (urlLocale === 'en' || urlLocale === 'hr') {
      if (currentLang !== urlLocale) setCurrentLang(urlLocale);
    } else if (currentLang !== defaultLang) {
      setCurrentLang(defaultLang);
    }
    
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const localizePath = (path: string) => {
    if (currentLang === defaultLang) return path;
    if (path.startsWith(`/${currentLang}/`) || path === `/${currentLang}`) {
      return path;
    }
    return path === '/' ? `/${currentLang}/` : `/${currentLang}${path}`;
  };

  const handleLanguageChange = (newLang: string) => {
    if (newLang === currentLang) return;
    
    // @ts-ignore
    setCurrentLang(newLang);
    
    let currentPath = location.pathname;
    let newPath = currentPath;

    if (currentLang !== defaultLang) {
      if (currentPath === `/${currentLang}`) {
        newPath = '/';
      } else if (currentPath.startsWith(`/${currentLang}/`)) {
        newPath = currentPath.replace(`/${currentLang}`, '');
      }
    }

    if (newLang !== defaultLang) {
      newPath = newPath === '/' ? `/${newLang}/` : `/${newLang}${newPath}`;
    }

    navigate(newPath + location.search + location.hash);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const navLinks = [
    { page: '/', label: m.navbar_link_home() },
    { page: '/o-meni/', label: m.navbar_link_about() },
    { page: '/usluge/', label: m.navbar_link_services() },
    { page: '/galerija/', label: m.navbar_link_gallery() },
    { page: '/kontakt/', label: m.navbar_link_contact() },
  ];

  return (
    <nav className={`navbar-wrapper z-[9999] ${isScrolled ? 'scrolled' : ''}`} aria-label={m.navbar_main_nav()}>
      <div className="nav-container">
        <NavLink className="logo" to={localizePath('/')} aria-label={m.navbar_logo_aria()}>
          DJ VRANA
        </NavLink>
        
        <button 
          type="button"
          className={`mobile-menu-btn relative z-[10000] p-2 cursor-pointer md:hidden flex items-center justify-center ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? m.navbar_btn_close() : m.navbar_btn_open()}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <ul id="mobile-menu" className={`nav-links z-[9999] ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => {
            const localizedTo = localizePath(link.page);
            const isActive = location.pathname === localizedTo || (localizedTo !== '/' && localizedTo !== `/${currentLang}/` && location.pathname.startsWith(localizedTo));
            
            return (
              <li key={link.page} style={{ '--item-index': index } as React.CSSProperties}>
                <NavLink
                  to={localizedTo}
                  className={`nav-link ${isActive ? 'active-nav' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onNavigate) onNavigate(link.page);
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
          <div className={`nav-link transition-opacity duration-700 ease-in-out ${!isClient ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <li className="lang-switcher-item flex items-center justify-center mt-6 md:mt-0 md:ml-4 md:justify-start" style={{ '--item-index': navLinks.length } as React.CSSProperties}>
              <div className="inline-flex bg-white/5 border border-[#d4af37]/20 rounded-full p-1 transition-all duration-300 hover:border-[#d4af37]/50">
                <button
                  type="button"
                  onClick={() => handleLanguageChange('hr')}
                  aria-label="Promijeni na Hrvatski"
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wider transition-all duration-300 outline-none ${
                    isClient && currentLang === 'hr' ? 'bg-[#d4af37] text-[#111] shadow-[0_4px_10px_rgba(212,175,55,0.3)]' : 'bg-transparent text-[#a0a0a0] hover:text-white'
                  }`}
                >
                  HR
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                  aria-label="Switch to English"
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wider transition-all duration-300 outline-none ${
                    isClient && currentLang === 'en' ? 'bg-[#d4af37] text-[#111] shadow-[0_4px_10px_rgba(212,175,55,0.3)]' : 'bg-transparent text-[#a0a0a0] hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;