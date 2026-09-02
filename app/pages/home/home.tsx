import type { Route } from "../../+types/root";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "../../styles.css";
import "./home.scss";
import { Link } from "react-router";

import aboutImg from '../../assets/images/about.webp'
import serviceImg01 from '../../assets/images/service01.webp';
import serviceImg02 from '../../assets/images/service02.webp';

import weddingsVideo from '../../assets/videos/weddings.mp4';
import eventsVideo from '../../assets/videos/events.mp4';

import weddingsVideoPoster from '../../assets/images/weddings-poster.webp';
import eventsVideoPoster from '../../assets/images/events-poster.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faGraduationCap,
  faCompactDisc,
  faChampagneGlasses,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import * as m from '~/paraglide/messages.js';
import { getMultilingualMeta } from "~/utils/seo/seo";
import { getLocale } from "~/paraglide/runtime";
import { LocalizedLink } from '~/utils/localizedLink/localizedLink';

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "", 
    m.home_meta_title(), 
    m.home_meta_desc(),
    m.home_meta_keywords()
  );
}

const reviewsData = [
  { author: "Ana Cvitanović", text: "Na maturalnoj napravljena top atmosfera, sve naše želje ispunjene i sve ispoštovano🔝🔝", textEn: "Top atmosphere created at the prom, all our wishes were fulfilled and respected 🔝🔝", date: new Date('2026-07-15') },
  { author: "Matija Matković", text: "Preporuka za vjenčanje! Svi zadovoljni i mladenci i djeca i bake i djedovi! Bilo je top od organizacije do realizacije!", textEn: "Recommendation for a wedding! Everyone was satisfied, the newlyweds, kids, and grandparents! It was top-notch from organization to realization!", date: new Date('2026-07-15') },
  { author: "Ivana Kuzek Vatavuk", text: "Sve pohvale DJ-u! Odlična glazba, super atmosfera, ali i dogovor i komunikacija prije svadbe. Preporuke! ☺️", textEn: "All praise to the DJ! Great music, super atmosphere, but also great communication before the wedding. Highly recommended! ☺️", date: new Date('2026-07-15') },
  { author: "kristina vučić", text: "Proslava mog 50-tog rođendana ne bi bila tulum stoljeca bez DJ Vrane...sve što smo dogovorili ispoštovao, mix pjesama savršen,prepoznaje kada treba mjenjati ritam tuluma, susretljiv prema željama ekipe, izuzetno profesionalan..sve u svemu za svaku preporuku 🫶", textEn: "My 50th birthday celebration wouldn't have been the party of the century without DJ Vrana... he respected everything we agreed on, the song mix was perfect, he recognizes when to change the rhythm of the party, accommodating to the crew's wishes, extremely professional... highly recommended 🫶", date: new Date('2026-04-15') },
  { author: "Ivan Maravić", text: "DJ za sve prigode, uvijek transparentan, pristupačan te se drži dogovora. Sve preporuke!", textEn: "DJ for all occasions, always transparent, approachable, and sticks to the agreement. Highly recommended!", date: new Date('2026-03-15') },
  { author: "Maja Gabrek", text: "Odlican DJ, simpatičan, napravio super ugođaj i atmosferu, sve pohvale👏🏻👏🏻", textEn: "Excellent DJ, friendly, created a great vibe and atmosphere, all praise 👏🏻👏🏻", date: new Date('2026-04-15') },
  { author: "Sonja Čičak", text: "top, odlicno pustao i svima se svidjelo!!", textEn: "Top, played excellently and everyone loved it!!", date: new Date('2026-04-15') },
  { author: "Mario Tica", text: "Odlican decko. Sve prema dogovoru. Za svaku preporuku.", textEn: "Great guy. Everything went exactly as agreed. Highly recommended.", date: new Date('2026-05-15') },
  { author: "Ana Šarić", text: "Za svaku preporuku!!! Top!!!", textEn: "Highly recommended!!! Top!!!", date: new Date('2026-03-15') },
  { author: "D S", text: "Najbolji DJ…sigurno se nećete požaliti ako ga bukirate..mi smo ga uzeli za vjenčanje trebao je dečko biti tu kao prateća glazba uz bend ali je totalno preuzeo show i napravio ludnicu..definitvno za svaku preporuku…i Btw dečko je super pristojan i ljubazan i dostupan u svakom trenu..", textEn: "The best DJ... you certainly won't regret booking him.. we hired him for our wedding, he was supposed to be background music alongside the band, but he totally stole the show and created absolute madness.. definitely highly recommended... and btw the guy is super polite, kind, and available at all times..", date: new Date('2026-08-09') },
  { author: "Ana Miha", text: "Preporuka za vjencanje!", textEn: "Highly recommended for a wedding!", date: new Date('2026-07-15') },
  { author: "Tara Ivišić", text: "Odličan DJ za maturalnu večer! Atmosfera je bila vrhunska od samog početka do kraja. Glazba je bila odlično odabrana, prilagođena svim generacijama i nitko nije ostao sjediti. DJ je znao podići raspoloženje, pratiti želje gostiju i …", textEn: "Excellent DJ for a prom night! The atmosphere was top-notch from start to finish. The music was perfectly selected, adapted to all generations, and no one stayed seated. The DJ knew how to lift the mood, follow the guests' wishes and...", date: new Date('2026-07-15') },
  { author: "Lauraa", text: "Sve pohvale za izvrsnu organizaciju i atmosferu koju je DJ stvorio na 18. rođendanu. Spoj profesionalnosti i odlične zabave. Svakako bismo ga ponovno angažirali.", textEn: "All praise for the excellent organization and atmosphere the DJ created at the 18th birthday. A perfect blend of professionalism and great entertainment. We would definitely hire him again.", date: new Date('2026-03-15') }
];

export default function Home() {
  const [displayedReviews, setDisplayedReviews] = useState(() => reviewsData.slice(0, 5));
  const [translatedReviews, setTranslatedReviews] = useState<Record<number, boolean>>({});

  const toggleTranslation = (index: number) => {
    setTranslatedReviews(prev => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
    setDisplayedReviews(shuffled.slice(0, 5));
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
    });
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
  }, []);

  const [currentPage, setCurrentPage] = useState('pocetna');
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      const windowHeight = window.innerHeight;
      
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.remove('opacity-0', 'translate-y-12');
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; 
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 20;
          const x = mouseX * speed;
          const y = mouseY * speed;
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    const currentLang = getLocale();

  const currentHomeUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/' 
    : 'https://djvrana.com/';

  const localityTranslated = currentLang === 'en' ? 'Zagreb' : 'Zagreb';
  const regionTranslated = currentLang === 'en' ? 'City of Zagreb' : 'Grad Zagreb';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": `${currentHomeUrl}#business`,
    "name": "DJ Vrana",
    "image": "https://djvrana.com/dj-vrana-og-image.png",
    "description": m.home_meta_desc(),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localityTranslated,
      "addressRegion": regionTranslated,
      "addressCountry": "HR"
    },
    "priceRange": "$$",
    "url": currentHomeUrl,
    "sameAs": [
      "https://www.instagram.com/ivan.vranesa/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@IvanVraneša",
      "https://soundcloud.com/djvrana"
    ]
  };

  return (
    <main className="overflow-x-hidden">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
       <section className="hero">
        <div className="hero-wrapper relative isolate min-h-[100svh]">
          <div className="hero-bg-img relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-32 px-4 pb-20 font-sans">

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-12 w-full">
              <header className="flex flex-col items-center text-center w-full">
                <div className="hero-badge mb-4">{m.home_hero_badge()}</div>

                <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold tracking-tight leading-[1.2] md:leading-[1.05]">
                  <span className="text-[#f4f4f5]">
                    {m.home_hero_title_1()}
                  </span>{" "}
                  <span className="inline-block relative pb-1 mt-2 md:mt-0 bg-[linear-gradient(135deg,#d4af37_0%,#f4e5a0_50%,#d4af37_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                    {m.home_hero_title_2()}
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-[1.1rem] text-[#a1a1aa] max-w-2xl mb-8 md:mb-10 mt-6 md:mt-6 leading-relaxed px-2">
                  {m.home_hero_desc()}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2 w-full px-4 sm:px-0">
                  <Link 
                    to="/kontakt" 
                    className="inline-flex justify-center items-center px-8 py-4 text-sm md:text-base font-extrabold tracking-widest bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black rounded-full hover:scale-[1.02] transition-transform duration-300 uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] w-full sm:w-auto"
                  >
                    {m.home_hero_btn_quote()}
                  </Link>
                  <button 
                    onClick={() => {
                        const aboutSection = document.querySelector('.about');
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="inline-flex justify-center items-center px-8 py-4 text-sm md:text-base font-extrabold tracking-widest bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors duration-300 uppercase w-full sm:w-auto"
                  >
                    {m.home_hero_btn_more()}
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="relative">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-40px] left-[50px] [animation-delay:0s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
          
          <div className="container relative min-h-screen flex items-center justify-center py-[60px] sm:py-[80px] px-4 sm:px-6 text-white font-sans mx-auto">
            <div className="relative z-10 max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[40px] lg:gap-[80px] items-center text-center lg:text-left">
              
              <div className="relative max-w-[350px] sm:max-w-[450px] lg:max-w-none w-full mx-auto lg:mx-0">
                <div className="relative p-2 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <img 
                      src={aboutImg} 
                      alt={m.home_about_img_alt()} 
                      className="w-full h-auto block aspect-[3/4] object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] to-transparent to-[60%] flex items-end justify-center lg:justify-start p-[20px] sm:p-[30px]">
                      <div className="flex gap-[10px] sm:gap-[15px]">
                        <Link to="https://www.instagram.com/ivan.vranesa/" target='blank' rel="noopener noreferrer" className="w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[18px] sm:text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:-translate-y-[3px]" aria-label="Instagram">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://www.tiktok.com/@dj.proslave" target='blank' rel="noopener noreferrer" className="w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[18px] sm:text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:-translate-y-[3px]" aria-label="TikTok">
                          <FontAwesomeIcon icon={faTiktok} />
                        </Link>
                        <Link to="https://www.youtube.com/@IvanVraneša" target='blank' rel="noopener noreferrer" className="w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[18px] sm:text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:-translate-y-[3px]" aria-label="YouTube">
                          <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link to="https://soundcloud.com/djvrana" target='blank' rel="noopener noreferrer" className="w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[18px] sm:text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:-translate-y-[3px]" aria-label="SoundCloud">
                          <FontAwesomeIcon icon={faSoundcloud} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-[10px] sm:py-[20px]">
                <header className="scroll-animate">
                  <span className="inline-block text-[10px] sm:text-[12px] tracking-[3px] uppercase text-[#d4af37] font-semibold mb-[20px] py-[8px] px-[20px] bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] rounded-[30px]">
                    {m.home_about_badge()}
                  </span>
                  
                  <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold leading-[1.1] mb-[15px] sm:mb-[20px] bg-gradient-to-br from-[#ffffff] to-[#d4af37] text-transparent bg-clip-text">
                    {m.home_about_title()}
                  </h2>
                  
                  <p className="text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-[#cccccc] mb-[20px] sm:mb-[30px] font-light">
                    {m.home_about_subtitle()}
                  </p>
                  
                  <p className="text-[0.95rem] sm:text-[1rem] lg:text-[1.1rem] leading-[1.7] sm:leading-[1.8] text-[#cccccc] mb-[30px] sm:mb-[35px] text-justify sm:text-left px-2 sm:px-0">
                    {m.home_about_desc()}
                  </p>
                </header>

                <div className="flex gap-[15px] sm:gap-[40px] mb-[40px] flex-wrap justify-center lg:justify-start">
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">{m.home_about_stats_1_num()}</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">{m.home_about_stats_1_label()}</span>
                  </div>
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">{m.home_about_stats_2_num()}</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">{m.home_about_stats_2_label()}</span>
                  </div>
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">{m.home_about_stats_3_num()}</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">{m.home_about_stats_3_label()}</span>
                  </div>
                </div>

                <LocalizedLink to="/o-meni/" aria-label={m.home_about_btn()} className="cta-button group inline-flex items-center justify-center w-full sm:w-auto gap-[12px] py-[15px] sm:py-[18px] px-[30px] sm:px-[40px] text-[0.95rem] sm:text-[1rem] font-semibold uppercase tracking-[1px] text-[#0a0a0a] bg-[#d4af37] rounded-full transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] relative overflow-hidden no-underline">
                  {m.home_about_btn()}
                  <span className="transition-transform duration-300 group-hover:translate-x-[5px]">→</span>
                </LocalizedLink>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="py-20 sm:py-30">
            <div className="relative min-h-screen bg-night">
              <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
              
              <div className="relative mx-auto w-full">
                <header className="mx-auto max-w-2xl text-center section-header scroll-animate px-4">
                  <p className="section-subtitle">{m.home_services_subtitle()}</p>
                  <h2 className="text-balance text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    {m.home_services_title()}
                  </h2>
                  <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                    {m.home_services_desc()}
                  </p>
                </header>
                <ServicesPremium />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section relative pt-10 pb-10 sm:pb-30 overflow-hidden">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.07),transparent)] blur-[100px] rounded-full z-0 pointer-events-none'></div>

        <div className="container relative px-4 sm:px-6 mx-auto z-10">
          <header className="section-header scroll-animate text-center mx-auto mb-10 sm:mb-16 px-4">
            <p className="section-subtitle">{m.home_reviews_subtitle()}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              {m.home_reviews_title()}
            </h2>
            <div className='flex items-center justify-center gap-3 mb-4 mt-2'>
              <div className='flex gap-1 text-[#fbbc04] text-xl'>
                {[...Array(5)].map((_, idx) => (
                  <FontAwesomeIcon key={idx} icon={faStar} />
                ))}
              </div>
              <span className='text-white font-bold text-lg'>5.0</span>
            </div>
            <div className="mx-auto flex items-center justify-center gap-2.5 mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 shrink-0">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>{m.home_reviews_desc()}</span>
            </div>
          </header>

          <div className='flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto'>
            {displayedReviews.map((review, i) => (
              <div 
                key={i}
                className='w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-white/5 backdrop-blur-xl border border-[rgba(212,175,55,0.2)] shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)] rounded-3xl p-6 md:p-8 flex flex-col transition duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.2)] cursor-default reveal-on-scroll opacity-0 translate-y-12'
              >
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-lg font-bold text-[#d4af37] shrink-0'>
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>{review.author}</h4>
                    <p className='text-white/50 text-xs'>{getTimeAgo(review.date, currentLang)}</p>
                  </div>
                </div>
                
                <div className='flex gap-1 text-[#fbbc04] mb-4 text-xs'>
                  {[...Array(5)].map((_, idx) => (
                    <FontAwesomeIcon key={idx} icon={faStar} />
                  ))}
                </div>
                
                <p className='text-white/75 font-light leading-relaxed italic relative text-sm md:text-[15px]'>
                  <span className='text-4xl text-[rgba(212,175,55,0.2)] font-serif absolute -top-4 -left-2'>"</span>
                  <span className='relative z-10'>
                    {currentLang !== 'hr' && translatedReviews[i] && review.textEn ? review.textEn : review.text}
                  </span>
                </p>
                {currentLang !== 'hr' && review.textEn && (
                  <button 
                    onClick={() => toggleTranslation(i)}
                    className="mt-4 text-xs font-semibold text-[#d4af37] hover:text-[#ffdf73] transition-colors duration-300 self-start inline-flex items-center"
                  >
                    {translatedReviews[i] ? m.home_reviews_see_original() : m.home_reviews_see_translation()}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video-nastup" className="video-showcase pt-10 pb-10 sm:pb-30 scroll-mt-[80px]">
        <div className="container relative px-4 sm:px-6 mx-auto">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
          
          <header className="section-header scroll-animate text-center mx-auto mb-10 sm:mb-16 px-4">
            <p className="section-subtitle">{m.home_video_subtitle()}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
              {m.home_video_title()}
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {m.home_video_desc()}
            </p>
          </header>

          <div className="flex justify-center scroll-animate relative z-10 w-full px-4">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-[0_20px_40px_-20px_rgba(212,175,55,0.4)] md:shadow-[0_20px_80px_-20px_rgba(212,175,55,0.4)] backdrop-blur-xl group transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]">
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-20"></div>
              <iframe
                src="https://www.youtube.com/embed/xf_R-eEJoUI?rel=0"
                title="DJ Vrana - Atmosfera s Nastupa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full relative z-10"
              ></iframe>
            </div>
          </div>
          <div className="mt-10 flex justify-center w-full">
            <LocalizedLink to="/galerija/" aria-label={m.home_video_aria_more()} className="w-full sm:w-auto px-8 md:px-20 btn btn-primary text-center mx-4 sm:mx-0 py-3 sm:py-4">
              {m.home_video_btn()}
            </LocalizedLink>
          </div>
        </div>
      </section>


      <section className="bg-[#121212] py-16 md:py-24 px-4 text-center border-t border-[#d4af37]/10 w-full relative z-20">
        <div className="container mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">{m.home_cta_title()}</h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
            {m.home_cta_desc()}
          </p>
          <LocalizedLink to="/kontakt/" type="button" className="btn btn-primary" aria-label={m.home_cta_aria()}>
            {m.home_cta_btn()}
          </LocalizedLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}

interface Item {
  id: string;
  title: string;
  badge?: string;
  icon: any;
  image?: any;
  video?: any;
  poster?: any;
  mediaPosition?: string;
  description: string;
  path: string;
  featured?: boolean;
  bullets?: string[];
  secondaryText: string;
}

const getServices = (): Item[] => [
  {
    id: "weddings",
    title: m.home_service_1_title(),
    badge: m.home_service_1_badge(),
    icon: faHeart,
    video: weddingsVideo,
    poster: weddingsVideoPoster,
    mediaPosition: "center",
    description: m.home_service_1_desc(),
    path: "/dj-za-vjencanja/",
    featured: true,
    bullets: m.home_service_1_bullets().split('|'),
    secondaryText: m.home_service_1_sec(),
  },
  {
    id: "events",
    title: m.home_service_2_title(),
    icon: faChampagneGlasses,
    video: eventsVideo,
    poster: eventsVideoPoster,
    mediaPosition: "center",
    description: m.home_service_2_desc(),
    path: "/usluge/#dogadaji",
    bullets: m.home_service_2_bullets().split('|'),
    secondaryText: m.home_service_2_sec(),
  },
  {
    id: "equipment",
    title: m.home_service_3_title(),
    icon: faCompactDisc,
    image: serviceImg02,
    mediaPosition: "50% 36%",
    description: m.home_service_3_desc(),
    path: "/najam-opreme/",
    bullets: m.home_service_3_bullets().split('|'),
    secondaryText: m.home_service_3_sec(),
  },
  {
    id: "education",
    title: m.home_service_4_title(),
    icon: faGraduationCap,
    image: serviceImg01,
    mediaPosition: "50% 20%",
    description: m.home_service_4_desc(),
    path: "/dj-edukacija/",
    bullets: m.home_service_4_bullets().split('|'),
    secondaryText: m.home_service_4_sec(),
  }
];

function Card({ title, badge, icon, image, video, poster, mediaPosition = "center", description, path, bullets, secondaryText }: Item) {
  return (
    <article
      className={[
        "group relative h-full overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.2)] bg-white/5",
        "backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)]",
        "transition duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.2)]",
        "animate-fadeInUp flex flex-col",
      ].join(" ")}
    >
      { image && (
        <div className={[
          "group z-999 relative overflow-hidden t-rounded-3xl border-b border-[rgba(212,175,55,0.2)] bg-white/5",
          "backdrop-blur-xl",
          ].join(" ")}
        >
          <img 
            src={image} 
            alt={`${title} - DJ Vrana usluge`} 
            className="w-full h-auto block aspect-[16/7] object-cover"
            style={{ objectPosition: mediaPosition }}
          />
        </div>
      )}

      {video && (
        <div
          className={[
            "group z-999 relative overflow-hidden t-rounded-3xl border-b border-[rgba(212,175,55,0.2)] bg-white/5",
            "backdrop-blur-xl",
          ].join(" ")}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className="w-full h-auto block aspect-[16/7] object-cover"
            style={{ objectPosition: mediaPosition }}
            aria-label={m.home_video_aria({ title })}
          >
            <source src={video} type="video/mp4" />
            {m.home_video_fallback()}
          </video>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
        <div className="pointer-events-none absolute -inset-32 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
          <div className="absolute left-[40%] top-[40%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(212,175,55,0.25)]" />
          <div className="absolute right-[20%] bottom-[10%] h-72 w-72 rounded-full bg-[rgba(212,175,55,0.25)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

        <div>
          <header className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              {badge && (
                <div className="md:absolute mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-[rgba(212,175,55,0.2)] px-3 py-1 text-xs font-semibold tracking-wide text-gold">
                  {badge}
                </div>
              )}

              <h3 className="md:pt-[2.5rem] text-xl font-extrabold tracking-tight text-white md:text-2xl">
                {title}
              </h3>
            </div>

            <div className="relative hidden h-10 w-10 shrink-0 rounded-2xl border border-white/10 bg-white/5 md:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
              </div>
            </div>
          </header>

          <p className="relative mt-4 text-sm leading-relaxed text-white/75 md:text-[15px]">
            {description}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="relative mt-5 space-y-2 text-sm text-white/75">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(212,175,55,0.9)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative mt-6 flex items-center justify-between pt-6">
          <span className="text-xs font-medium tracking-wide text-white/50">
            {secondaryText}
          </span>
          
          <LocalizedLink
            to={path}
            aria-label={m.home_card_aria_more({ title })}
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
          >
            {m.home_card_btn()}
          </LocalizedLink>
        </div>
      </div>
    </article>
  );
}

function ServicesPremium() {
  const services = getServices();
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-6">
        {featured && (
          <div className="md:col-span-3">
            <Card key={featured.id} {...featured} />
          </div>
        )}

        {rest[0] && (
          <div className="md:col-span-3">
            <Card key={rest[0].id} {...rest[0]} />
          </div>
        )}

        {rest[1] && (
          <div className="md:col-span-3">
            <Card key={rest[1].id} {...rest[1]} />
          </div>
        )}

        {rest[2] && (
          <div className="md:col-span-3">
            <Card key={rest[2].id} {...rest[2]} />
          </div>
        )}
      </div>
  );
}



const getTimeAgo = (date: Date, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffInDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 3600 * 24));
  const diffInMonths = (date.getFullYear() - now.getFullYear()) * 12 + date.getMonth() - now.getMonth();
  
  if (diffInMonths <= 0) {
    if (diffInDays > -7) {
      return rtf.format(diffInDays, 'day');
    }
    const weeks = Math.floor(diffInDays / 7);
    if (weeks > -4) {
        return rtf.format(weeks, 'week');
    }
  }
  
  if (diffInMonths > -12) {
    return rtf.format(diffInMonths, 'month');
  }
  
  const years = Math.floor(diffInMonths / 12);
  return rtf.format(years, 'year');
};