import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhone,
  faSquareEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';
import { Link } from "react-router";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: any) => {
    e.preventDefault();
    if (email) {
      alert(`Hvala na prijavi! Email ${email} je uspješno dodan na listu.`);
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-[#d4af37]/20 text-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#d4af37] before:to-transparent">
      <div className="container px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-10 lg:gap-12 mb-12 pb-12 border-b border-[#d4af37]/20">
          
          <div className="flex flex-col gap-6">
            <div className="text-[1.75rem] md:text-[2rem] font-bold bg-gradient-to-br from-[#d4af37] to-[#f0d878] bg-clip-text text-transparent tracking-wide uppercase">
              DJ VRANA
            </div>
            <p className="text-[#b8b8b8] text-[0.95rem] leading-relaxed max-w-[350px]">
              Pružamo premium DJ usluge za ekskluzivne događaje, vjenčanja, korporativne zabave i privatne proslave. Vaš trenutak, naša glazba.
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="https://www.instagram.com/ivan.vranesa/" target='blank' aria-label="Instagram" className="w-[42px] h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
              </Link>
              <Link
                to="https://www.tiktok.com/@dj.proslave"
                target='blank'
                aria-label="TikTok"
                className="w-[42px] h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-[18px]" />
              </Link>
              <Link to="https://www.youtube.com/@IvanVrane%C5%A1a" target='blank' aria-label="YouTube" className="w-[42px] h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faYoutube} className="text-[18px]" />
              </Link>
              <Link to="#" aria-label="SoundCloud" target='blank' className="w-[42px] h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faSoundcloud} className="text-[18px]" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#d4af37] text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-6">
              Usluge
            </h4>
            <ul className="flex flex-col gap-3">
              {[{title: 'Vjenčanja', path: "/vjencanja"}, {title: 'Korporativni Eventi', path: "/korporativni-eventi"}, {title: 'Privatne Proslave', path: "/privatne-proslave"}, {title: 'Klubovi & Festivali', path: "/klubovi-i-festivali"}].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#b8b8b8] text-[0.9rem] transition-all duration-300 inline-block hover:text-[#d4af37] hover:pl-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-[#d4af37] text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-6">
              Istraži
            </h4>
            <ul className="flex flex-col gap-3">
              {[{title: 'O Meni', path: "/o-meni"}, {title: 'Galerija', path: "/galerija"}, {title: 'Video', path: "/galerija#video"}, {title: 'FAQ', path: "/kontakt#cesta-pitanja"}].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#b8b8b8] text-[0.9rem] transition-all duration-300 inline-block hover:text-[#d4af37] hover:pl-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[#d4af37] text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-6">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[#b8b8b8] text-[1rem] leading-relaxed">
                <FontAwesomeIcon icon={faSquarePhone} className="text-[#d4af37] text-[1.4rem] mt-[2px]" />
                <Link to="tel:+3850989582676" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">
                  +385 098 958 2676
                </Link>
              </li>
              <li className="flex items-start gap-3 text-[#b8b8b8] text-[1rem] leading-relaxed">
                <FontAwesomeIcon icon={faSquareEnvelope} className="text-[#d4af37] text-[1.4rem] mt-[2px]" />
                <Link to="mailto:proslave.dj@gmail.com" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">
                  proslave.dj@gmail.com
                </Link>
              </li>
              <li>
                <button className="btn-wrapper btn-footer"><Link to="/contact">Kontaktiraj Me</Link></button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Legal & Copyright) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[#b8b8b8] text-[0.85rem] gap-6 md:gap-0 text-center md:text-left">
          <div>© 2026 DJ Vrana. Sva prava pridržana.</div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/pravila-privatnosti" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">Pravila Privatnosti</Link>
            <Link to="/uvjeti-koristenja" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">Uvjeti Korištenja</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
