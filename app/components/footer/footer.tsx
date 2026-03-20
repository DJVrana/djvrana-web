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
      {/* Prilagođen padding za mobitele (px-5, pt-12) i veće ekrane (md:px-8, md:pt-16) */}
      <div className="container mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8">
        
        {/* Optimiziran Grid:
            - Mobiteli: 2 stupca (Brand preko cijelog, Navigacije svaka po pola, Kontakt preko cijelog)
            - Desktop: Tvoj originalni 4-column layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-4 gap-y-10 md:gap-10 lg:gap-12 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-[#d4af37]/20">
          
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 md:gap-6">
            <div className="text-[1.75rem] md:text-[2rem] font-bold bg-gradient-to-br from-[#d4af37] to-[#f0d878] bg-clip-text text-transparent tracking-wide uppercase">
              DJ VRANA
            </div>
            <p className="text-[#b8b8b8] text-[0.9rem] md:text-[0.95rem] leading-relaxed max-w-full lg:max-w-[350px]">
              Premium DJ usluge za ekskluzivne događaje, vjenčanja, korporativne zabave i privatne proslave. Vaša želja za savršenom glazbom je moja misija!
            </p>
            <div className="flex gap-3 sm:gap-4 mt-2 md:mt-4">
              <Link to="https://www.instagram.com/ivan.vranesa/" target='_blank' aria-label="Posjetite naš Instagram profil" rel="noopener noreferrer" className="w-[40px] md:w-[42px] h-[40px] md:h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faInstagram} className="text-[18px] md:text-[20px]" />
              </Link>
              <Link to="https://www.tiktok.com/@dj.proslave" target='_blank' aria-label="Posjetite naš TikTok profil" rel="noopener noreferrer" className="w-[40px] md:w-[42px] h-[40px] md:h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faTiktok} className="text-[16px] md:text-[18px]" />
              </Link>
              <Link to="https://www.youtube.com/@IvanVrane%C5%A1a" target='_blank' aria-label="Posjetite naš YouTube kanal" rel="noopener noreferrer" className="w-[40px] md:w-[42px] h-[40px] md:h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faYoutube} className="text-[16px] md:text-[18px]" />
              </Link>
              <Link to="https://soundcloud.com/djvrana" aria-label="Poslušajte naše setove na SoundCloudu" target='_blank' rel="noopener noreferrer" className="w-[40px] md:w-[42px] h-[40px] md:h-[42px] border border-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <FontAwesomeIcon icon={faSoundcloud} className="text-[16px] md:text-[18px]" />
              </Link>
            </div>
          </div>

          <nav aria-label="Usluge" className="col-span-1">
            <h4 className="text-[#d4af37] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-4 md:mb-6">
              Usluge
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                {title: 'Vjenčanja', path: "/vjencanja/"}, 
                {title: 'Korporativni Događaji', path: "/korporativni-dogadaji/"}, 
                {title: 'Privatne Proslave', path: "/privatne-proslave/"}, 
                {title: 'DJ Edukacija', path: "/dj-edukacija/"}, 
                {title: 'Najam Opreme', path: "/najam-opreme/"}
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#b8b8b8] text-[0.85rem] md:text-[0.9rem] transition-all duration-300 inline-block hover:text-[#d4af37] hover:pl-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Istraži stranicu" className="col-span-1">
            <h4 className="text-[#d4af37] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-4 md:mb-6">
              Istraži
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                {title: 'O Meni', path: "/o-meni/"}, 
                {title: 'Galerija', path: "/galerija/#photo"}, 
                {title: 'Video', path: "/galerija/"}, 
                {title: 'FAQ', path: "/kontakt/#cesta-pitanja"}, 
                {title: 'Kontakt', path: "/kontakt/"}
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#b8b8b8] text-[0.85rem] md:text-[0.9rem] transition-all duration-300 inline-block hover:text-[#d4af37] hover:pl-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-[#d4af37] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-[0.15em] mb-4 md:mb-6">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[#b8b8b8] text-[0.9rem] md:text-[1rem] leading-relaxed">
                <FontAwesomeIcon icon={faSquarePhone} className="text-[#d4af37] text-[1.2rem] md:text-[1.4rem] mt-[2px]" />
                {/* Za telefonske brojeve i mailove koristi se standardni <a> tag umjesto React Router Link-a */}
                <a href="tel:+3850989582676" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">
                  +385 098 958 2676
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#b8b8b8] text-[0.9rem] md:text-[1rem] leading-relaxed break-all">
                <FontAwesomeIcon icon={faSquareEnvelope} className="text-[#d4af37] text-[1.2rem] md:text-[1.4rem] mt-[2px]" />
                <a href="mailto:proslave.dj@gmail.com" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37] text-nowrap">
                  proslave.dj@gmail.com
                </a>
              </li>
              <li className="mt-2 w-full sm:w-auto">
                <Link to="/kontakt/" className="btn-wrapper btn-footer inline-block w-full text-center py-3 md:py-2 px-4 border border-[#d4af37]/50 rounded-lg text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  Kontaktirajte Me
                </Link>
              </li>
            </ul>
          </address>
        </div>

        {/* Donja linija - razmaknuto na mobitelu uz lagani gap */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2 md:pt-4 text-[#b8b8b8] text-[0.8rem] md:text-[0.85rem] gap-4 md:gap-0 text-center md:text-left">
          <div>© {new Date().getFullYear()} DJ Vrana. Sva prava pridržana.</div>
          <nav aria-label="Pravni dokumenti" className="flex gap-4 md:gap-8">
            <Link to="/politika-privatnosti/" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">Politika Privatnosti</Link>
            <Link to="/uvjeti-koristenja/" className="text-[#b8b8b8] transition-colors duration-300 hover:text-[#d4af37]">Uvjeti Korištenja</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
