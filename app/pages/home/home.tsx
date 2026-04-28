import type { Route } from "../../+types/root";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "../../styles.css";
import "./home.scss";
import { Link } from "react-router";

// Slike i videi
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
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import * as m from '~/paraglide/messages.js';
import { getMultilingualMeta } from "~/utils/seo/seo";
import { getLocale } from "~/paraglide/runtime";

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "", 
    m.home_meta_title(), 
    m.home_meta_desc(),
    m.home_meta_keywords()
  );
}

export default function Home() {
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

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mt-12 w-full">
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

                <Link to="/o-meni/" aria-label={m.home_about_btn()} className="cta-button group inline-flex items-center justify-center w-full sm:w-auto gap-[12px] py-[15px] sm:py-[18px] px-[30px] sm:px-[40px] text-[0.95rem] sm:text-[1rem] font-semibold uppercase tracking-[1px] text-[#0a0a0a] bg-[#d4af37] rounded-full transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] relative overflow-hidden no-underline">
                  {m.home_about_btn()}
                  <span className="transition-transform duration-300 group-hover:translate-x-[5px]">→</span>
                </Link>
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
                className="w-full h-full relative z-10"
              ></iframe>
            </div>
          </div>
          <div className="mt-10 flex justify-center w-full">
            <Link to="/galerija/" aria-label={m.home_video_aria_more()} className="w-full sm:w-auto px-8 md:px-20 btn btn-primary text-center mx-4 sm:mx-0 py-3 sm:py-4">
              {m.home_video_btn()}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] py-16 md:py-24 px-4 text-center border-t border-[#d4af37]/10 w-full relative z-20">
        <div className="container mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">{m.home_cta_title()}</h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
            {m.home_cta_desc()}
          </p>
          <Link to="/kontakt/" type="button" className="btn btn-primary" aria-label={m.home_cta_aria()}>
            {m.home_cta_btn()}
          </Link>
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
          
          <Link
            to={path}
            aria-label={m.home_card_aria_more({ title })}
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
          >
            {m.home_card_btn()}
          </Link>
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