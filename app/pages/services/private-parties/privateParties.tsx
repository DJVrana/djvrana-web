import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import DJControllerApp from '~/components/dj-controller/djController';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faSliders,
  faComments,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import type { Route } from './+types/privateParties';
import privatePartiesImg from '../../../assets/images/private-parties.webp'

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com"; 
  const title = "DJ za Privatne Proslave, Rođendane i Maturalne | DJ Vrana";
  const description = "Rezervirajte DJ Vranu za nezaboravne privatne proslave, rođendane, maturalne zabave i djevojačke večeri. Vrhunska glazba, rasvjeta i nevjerojatna atmosfera.";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "DJ za privatne proslave, DJ za rođendane, DJ za maturalnu zabavu, DJ za djevojačku, party DJ Zagreb, glazba za proslave" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${domain}/privatne-proslave` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${domain}/dj-vrana-og-image.png` },
    
    // Canonical link
    { tagName: "link", rel: "canonical", href: `${domain}/privatne-proslave` }
  ];
}

export default function PrivatneProslave() {
  const [currentPage, setCurrentPage] = useState('usluge');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
    });
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DJ za Privatne Proslave i Rođendane",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DJ Vrana",
      "image": "https://djvrana.com/dj-vrana-og-image.png"
    },
    "description": "Profesionalne DJ usluge za rođendane, maturalne zabave, djevojačke večeri i ostale privatne proslave. Uključuje personaliziranu glazbu, profesionalno ozvučenje i rasvjetu.",
    "areaServed": "Hrvatska",
    "url": "https://djvrana.com/privatne-proslave",
    "category": "Event Entertainment"
  };

  return (
    <main>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
      />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <div className="min-h-screen text-white font-sans overflow-x-hidden">
        
        <section className="text-center mb-16 relative private-parties-hero-bg-img py-30 md:py-40 px-4">
          <div className="hero-badge">PREMIUM DJ USLUGE</div>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold bg-gradient-to-br from-[#d4af37] via-[#f4e5a0] to-[#d4af37] bg-clip-text text-transparent mb-5 tracking-tight">
            Privatne Proslave
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-[700px] mx-auto leading-[1.8]">
            Bez obzira radi li se o rođendanu, maturalnoj zabavi ili djevojačkoj večeri, svaki događaj zaslužuje glazbu koja pokreće, energiju koja okuplja i atmosferu koja se pamti.
          </p>
        </section>

        <section className="private-parties px-4 md:px-0">
          <div className="container mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center mb-20">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>

              <div className="relative lg:max-w-none w-full order-2 md:order-1">
                <div className="relative p-1 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <img
                      src={privatePartiesImg}
                      alt="DJ Vrana pušta glazbu i stvara odličnu atmosferu na rođendanu i privatnoj proslavi"
                      loading="lazy"
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="py-5 order-1 md:order-2">
                <span className="inline-block px-4 mb-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  DJ Vrana
                </span>
                <h2 className="text-[1.5rem] md:text-[2rem] mb-6 text-white font-semibold">
                  Trenuci koji ostaju u sjećanju
                </h2>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  <strong>Rođendani:</strong> Proslava tvog posebnog dana zaslužuje glazbu koja pokreće, energiju koja zarazi i atmosferu koja ostaje u sjećanju. Bilo da je manja zabava ili veći party, svaki rođendan pretvaram u događaj o kojem će se pričati danima.
                </p>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  <strong>Maturalne zabave:</strong> Završetak jedne faze i početak novih avantura! Svojom glazbom stvaram energiju koja povezuje sve prisutne i osiguravam da se smijeh, ples i dobre vibracije pamte dugo nakon što se svjetla ugase.
                </p>
              </div>
            </div>

            <div className="scroll-animate relative bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-[rgba(10,10,10,0.8)] border border-[#d4af37]/10 rounded-[20px] p-6 sm:p-10 md:p-[60px_40px] mt-10">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <header>
                <p className="section-subtitle text-center">Što Očekivati</p>
                <h2 className="text-[1.5rem] md:text-[1.75rem] mb-10 text-center text-white font-semibold">
                  Što uključuje usluga
                </h2>
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[20px] md:gap-[30px]">

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faMusic} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Personalizirani glazbeni pristup</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Prilagodba za sve dobne skupine kako bi se svi uzvanici odlično zabavili, bilo na privatnoj zabavi, djevojačkoj večeri ili korporativnom događaju.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faSliders} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Fleksibilni paketi i trajanje</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Donosim Vam vrhunsku glazbu i energiju koja traje cijelu noć, sa opcijama koje se idealno prilagođavaju vašim festivalskim, koncertnim ili privatnim potrebama.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faComments} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Interaktivna zabava i angažman</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Zajedno s vama stvaram trenutke koji ostaju u sjećanju i čine vašu proslavu jedinstvenom uz maksimalan angažman i interakciju svih gostiju.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faBolt} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Profesionalna rasvjeta i efekti</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Potpuni vizualno-zvučni doživljaj koji podiže svaki događaj na novu razinu. Vaša proslava pretvara se u pravi spektakl za sva osjetila.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-0 relative overflow-hidden">
          <div className="scroll-animate">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[150px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Rezervirajte Svoj Termin</h2>
                <p className="text-lg md:text-xl text-[#b8b8b8] mb-10">
                  Podignite svaki događaj uz DJ Vranu! Kontaktirajte me danas i rezervirajmo datum za vašu proslavu.
                </p>
                <Link
                  to="/kontakt"
                  aria-label="Pošaljite upit za rezervaciju DJ-a za vašu privatnu proslavu"
                  className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                >
                  Pošalji Upit
                </Link>
                
                <div className="mx-auto rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[10px] w-full max-w-[595px] overflow-hidden">
                  <DJControllerApp></DJControllerApp>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
