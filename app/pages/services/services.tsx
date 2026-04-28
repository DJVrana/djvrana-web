import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faBuilding, 
  faChampagneGlasses, 
  faGraduationCap,
  faCompactDisc,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '~/components/navbar/navbar';
import Footer from '~/components/footer/footer';
import { Link } from 'react-router';
import type { Route } from './+types/services';

import services01 from '../../assets/videos/weddings.mp4';
import services02 from '../../assets/videos/corporate-events.mp4'
import services03 from '../../assets/videos/private-parties.mp4'
import services04 from '../../assets/videos/dj-education.mp4'
import services05 from '../../assets/images/services05.webp'

import services01Poster from '../../assets/images/weddings-poster.webp';
import services02Poster from '../../assets/images/corporate-events-poster.webp';
import services03Poster from '../../assets/images/private-parties-poster.webp';
import services04Poster from '../../assets/images/dj-education-poster.webp';

import * as m from '~/paraglide/messages.js';
import { LocalizedLink } from '~/utils/localizedLink/localizedLink';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "usluge", 
    m.services_meta_title(), 
    m.services_meta_desc(),
    m.services_meta_keywords()
  )
}

const PremiumDJUsluge: React.FC = () => {
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentPage, setCurrentPage] = useState('usluge');

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
  const baseUrl = currentLang === 'en' ? 'https://djvrana.com/en' : 'https://djvrana.com';

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": m.services_schema_name(),
    "serviceType": m.services_schema_desc(),
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://djvrana.com/#business",
      "name": "DJ Vrana",
      "url": "https://djvrana.com/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": m.services_schema_name(),
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": m.services_schema_1_name(),
            "description": m.services_schema_1_desc(),
            "url": `${baseUrl}/dj-za-vjencanja/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": m.services_schema_2_name(),
            "description": m.services_schema_2_desc(),
            "url": `${baseUrl}/dj-za-korporativni-dogadaj/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": m.services_schema_3_name(),
            "description": m.services_schema_3_desc(),
            "url": `${baseUrl}/dj-za-proslave/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": m.services_schema_4_name(),
            "description": m.services_schema_4_desc(),
            "url": `${baseUrl}/dj-edukacija/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": m.services_schema_5_name(),
            "description": m.services_schema_5_desc(),
            "url": `${baseUrl}/najam-opreme/`
          }
        }
      ]
    }
  };

  return (
    <main className="overflow-x-hidden">
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} 
        />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="text-white min-h-screen font-sans overflow-hidden relative">
        
        <div className="absolute rounded-full blur-[80px] md:blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-50px] md:left-[-100px] [animation-delay:0s]"></div>
        <div className="absolute rounded-full blur-[80px] md:blur-[120px] opacity-15 pointer-events-none animate-float w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-100px] md:bottom-[-150px] right-[-100px] md:right-[-150px] [animation-delay:5s]"></div>
        <div className="absolute rounded-full blur-[80px] md:blur-[120px] opacity-15 pointer-events-none animate-float w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[0] md:right-[10%] [animation-delay:10s]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className='pt-28 md:pt-40'>
                <div className="relative text-center pt-8 pb-16 md:pb-24">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-2 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight leading-tight">
                        {m.services_header_title()}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-2">
                        {m.services_header_desc()}
                    </p>
                </div>
            </header>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.services_weddings_badge()}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">{m.services_weddings_title()}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {m.services_weddings_desc()}
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {m.services_weddings_bullets().split('|').map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                  <LocalizedLink to="/dj-za-vjencanja/" className="btn btn-primary mt-4 inline-block" aria-label={m.services_weddings_aria_more()}>
                    {m.services_weddings_btn()}
                  </LocalizedLink>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
              <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faHeart} className="text-[16px] md:text-[32px]" />
              </div>

              <video
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={services01Poster}
                aria-label={m.services_weddings_video_aria()}
              >
                <source src={services01} type="video/mp4" />
                {m.services_video_fallback()}
              </video>
            </div>
            </section>

            <section id='dogadaji' className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out scroll-mt-[160px]">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.services_corp_badge()}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">{m.services_corp_title()}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {m.services_corp_desc()}
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {m.services_corp_bullets().split('|').map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <LocalizedLink to="/dj-za-korporativni-dogadaj/" type="button" className="btn btn-primary mt-4 inline-block" aria-label={m.services_corp_aria_more()}>
                  {m.services_corp_btn()}
                </LocalizedLink>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 lg:left-auto lg:-right-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faBuilding} className="text-[16px] md:text-[32px]" />
                </div>
                <video
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={services02Poster}
                  aria-label={m.services_corp_video_aria()}
                >
                  <source src={services02} type="video/mp4" />
                  {m.services_video_fallback()}
                </video>
            </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.services_parties_badge()}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">{m.services_parties_title()}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {m.services_parties_desc()}
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {m.services_parties_bullets().split('|').map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <LocalizedLink to="/dj-za-proslave/" type="button" className="btn btn-primary mt-4 inline-block" aria-label={m.services_parties_aria_more()}>
                  {m.services_parties_btn()}
                </LocalizedLink>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faChampagneGlasses} className="text-[16px] md:text-[32px]" />
                </div>
                <video
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={services03Poster}
                  aria-label={m.services_parties_video_aria()}
                >
                  <source src={services03} type="video/mp4" />
                  {m.services_video_fallback()}
                </video>
            </div>
            </section>

            <section className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.services_edu_badge()}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">{m.services_edu_title()}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {m.services_edu_desc()}
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {m.services_edu_bullets().split('|').map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <LocalizedLink to="/dj-edukacija/" type="button" className="btn btn-primary mt-4 inline-block" aria-label={m.services_edu_aria_more()}>
                  {m.services_edu_btn()}
                </LocalizedLink>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 lg:left-auto lg:-right-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faGraduationCap} className="text-[16px] md:text-[32px]" />
                </div>
                <video
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={services04Poster}
                  aria-label={m.services_edu_video_aria()}
                >
                  <source src={services04} type="video/mp4" />
                  {m.services_video_fallback()}
                </video>
            </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.services_rent_badge()}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">{m.services_rent_title()}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {m.services_rent_desc()}
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {m.services_rent_bullets().split('|').map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <LocalizedLink to="/najam-opreme/" type="button" className="btn btn-primary mt-4 inline-block" aria-label={m.services_rent_aria_more()}>
                  {m.services_rent_btn()}
                </LocalizedLink>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faCompactDisc} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt={m.services_rent_img_alt()}
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services05}
                />
            </div>
            </section>

        </div>

        <section className="bg-[#121212] py-16 md:py-24 px-4 text-center border-t border-[#d4af37]/10 w-full relative z-20">
            <div className="container mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">{m.services_cta_title()}</h2>
              <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
                {m.services_cta_desc()}
              </p>
              <LocalizedLink to="/kontakt/" type="button" className="btn btn-primary" aria-label={m.services_cta_aria()}>
                {m.services_cta_btn()}
              </LocalizedLink>
            </div>
        </section>
        </div>
        <Footer />
    </main>
  );
};

export default PremiumDJUsluge;