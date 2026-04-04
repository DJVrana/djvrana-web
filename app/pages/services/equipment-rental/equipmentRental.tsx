import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import DJControllerApp from '~/components/dj-controller/djController';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeHigh,
  faSliders,
  faLightbulb,
  faMicrophone,
  faWrench,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import type { Route } from './+types/equipmentRental';
import equipmentRentalImg from '../../../assets/images/equipment-rental.webp'

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com"; 
  const title = "Najam Opreme | Ozvučenje, Rasvjeta i Mikseri | DJ Vrana";
  const description = "Vrhunska DJ oprema za svaki događaj – ozvučenje, rasvjeta i mikseri koji osiguravaju savršen zvuk i atmosferu.";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "najam opreme, najam dj opreme, ozvučenje, rasvjeta, dj mikseri, najam mikrofona, tehnička podrška" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${domain}/najam-opreme/` },
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
    { tagName: "link", rel: "canonical", href: `${domain}/najam-opreme/` }
  ];
}

export default function NajamOpreme() {
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
    "name": "Najam DJ Opreme i Rasvjete",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DJ Vrana",
      "image": "https://djvrana.com/dj-vrana-og-image.png"
    },
    "description": "Vrhunska DJ oprema za svaki događaj – ozvučenje, rasvjeta i mikseri koji osiguravaju savršen zvuk i atmosferu uz stručnu tehničku podršku.",
    "areaServed": "Hrvatska",
    "url": "https://djvrana.com/najam-opreme/",
    "category": "Equipment Rental"
  };

  return (
    <main>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
      />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <div className="min-h-screen text-white font-sans overflow-x-hidden">
        
        <section className="text-center mb-16 relative equipment-rental-hero-bg-img py-30 md:py-40 px-4">
          <div className="hero-badge">PREMIUM OPREMA</div>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold bg-gradient-to-br from-[#d4af37] via-[#f4e5a0] to-[#d4af37] bg-clip-text text-transparent mb-5 tracking-tight">
            Najam Opreme
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-[700px] mx-auto leading-[1.8]">
            Vrhunska DJ oprema za svaki događaj – ozvučenje, rasvjeta i mikseri koji osiguravaju savršen zvuk i atmosferu.
          </p>
        </section>

        <section className='equipment-rental px-4 md:px-0'>
          <div className='container mx-auto'>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center mb-20">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>

              <div className="relative lg:max-w-none w-full order-2 md:order-1">
                <div className="relative p-1 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <img 
                      src={equipmentRentalImg}
                      alt="Profesionalna DJ oprema, mikseri i ozvučenje za najam" 
                      loading="lazy"
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="py-5 order-1 md:order-2">
                <span className="inline-block px-4 mb-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  Audio & Svijetla
                </span>
                <h2 className="text-[1.5rem] md:text-[2rem] mb-6 text-white font-semibold">
                  Sve što vam treba za nezaboravan događaj
                </h2>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  Bez obzira organizirate li privatnu proslavu, korporativni event ili veći nastup, osiguravam opremu koja garantira vrhunski doživljaj. Pouzdana i profesionalna oprema visoke klase koja pruža snažan i kristalno čist zvuk u svakom prostoru.
                </p>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  Asortiman pokriva sve tehničke potrebe – od kvalitetnog ozvučenja i osnovne ambijentalne rasvjete do DJ kontrolera, mikrofona i kompletne tehničke podrške na terenu, kako bi vaš događaj protekao bez stresa i komplikacija.
                </p>
              </div>
            </div>

            <div className="scroll-animate relative bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-[rgba(10,10,10,0.8)] border border-[#d4af37]/10 rounded-[20px] p-6 sm:p-10 md:p-[60px_40px] mt-10">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <header>
                <p className="section-subtitle text-center">Što Očekivati</p>
                <h2 className="text-[1.5rem] md:text-[1.75rem] mb-10 text-center text-white font-semibold">
                  Naša ponuda opreme
                </h2>
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[20px] md:gap-[30px]">
                
                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faVolumeHigh} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Ozvučenje</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Snažni zvučnici i bas binovi vrhunske kvalitete koji isporučuju jasan zvuk visoke definicije prilagodljiv veličini vašeg prostora.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faSliders} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">DJ Kontroleri i Mikseri</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Profesionalna klupska oprema idealna za izvođače, spremna za jednostavno spajanje i osiguravanje fluidnih prijelaza i setova.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Rasvjeta</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Osnovna ambijentalna rasvjeta i moving head svjetla za dinamičnu i efektno osvijetljenu atmosferu.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faCube} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">DJ Pult</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Moderan i uredan DJ stol koji se vizualno uklapa u prostor i osigurava profesionalan izgled.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Mikrofoni</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Kvalitetni bežični i žični mikrofoni koji osiguravaju jasan i pouzdan prijenos govora i glazbe u svakom trenutku.
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faWrench} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">Tehnička podrška</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    Osigurana tehnička podrška tijekom cijelog događaja kako bi sve funkcioniralo besprijekorno i bez stresa.
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
              <div className='max-w-3xl mx-auto text-center'>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Zatražite Ponudu Opreme</h2>
                <p className="text-lg md:text-xl text-[#b8b8b8] mb-10">
                  Trebate pouzdano ozvučenje i rasvjetu? Kontaktirajte me danas kako bismo osigurali opremu koja najbolje odgovara vašim potrebama.
                </p>
                <Link 
                  to="/kontakt/"
                  aria-label="Pošaljite upit za najam DJ opreme, ozvučenja i rasvjete"
                  className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                >
                  Pošaljite Upit
                </Link>
                
                <div className='mx-auto rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[10px] w-full max-w-[595px] overflow-hidden'>
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
