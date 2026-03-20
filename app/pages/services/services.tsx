import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRing, 
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

import services01 from '../../assets/images/services01.webp'
import services02 from '../../assets/images/services02.webp'
import services03 from '../../assets/images/services03.webp'
import services04 from '../../assets/images/services04.webp'
import services05 from '../../assets/images/services05.webp'

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com"; 
  const title = "DJ Usluge | Vjenčanja, Eventi i Najam Opreme | DJ Vrana";
  const description = "Vrhunske DJ usluge za vjenčanja, korporativne evente i privatne proslave. Nudimo i profesionalnu DJ edukaciju te najam razglasa i rasvjete.";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "DJ usluge, DJ za vjenčanja Zagreb, korporativni event DJ, najam DJ opreme, DJ edukacija tečaj, glazba za proslave" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${domain}/usluge/` },
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
    { tagName: "link", rel: "canonical", href: `${domain}/usluge/` }
  ];
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

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DJ Vrana usluge",
    "serviceType": "DJ usluge za vjenčanja, korporativne događaje i privatne proslave",
    "provider": {
      "@type": "ProfessionalService",
      "name": "DJ Vrana",
      "url": "https://djvrana.com/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DJ Vrana usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Vjenčanja",
            "description": "Profesionalno odabrana glazba i savršena atmosfera za vjenčanja.",
            "url": "https://djvrana.com/vjencanja/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Korporativne Događaje",
            "description": "Glazba i atmosfera za korporativne evente i team buildinge.",
            "url": "https://djvrana.com/korporativni-dogadaji/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Privatne Proslave",
            "description": "Nezaboravna glazba za rođendane, maturalne zabave i ostale proslave.",
            "url": "https://djvrana.com/privatne-proslave/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ Edukacija",
            "description": "Tečajevi i radionice za početnike i napredne DJ-eve.",
            "url": "https://djvrana.com/dj-edukacija/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Najam Opreme",
            "description": "Najam profesionalnog ozvučenja, rasvjete i DJ miksera.",
            "url": "https://djvrana.com/najam-opreme/"
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
                        Što Nudim
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-2">
                      Profesionalne DJ usluge i oprema koja podiže svaki događaj na novu razinu. Svaki set prilagođavam Vašim željama i atmosferi, kako bi svaki trenutak bio poseban.
                    </p>
                </div>
            </header>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Premium Wedding
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">DJ Vjenčanja</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Učinite svoje vjenčanje nezaboravnim uz DJ Vranu. DJ na vjenčanju osigurava profesionalno odabranu glazbu i savršenu atmosferu koja prati svaki trenutak – od ceremonije do posljednjeg plesa, potpuno prilagođeno vašim željama i stilu svadbe.
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {['Prilagođavanje glazbenog seta Vašim željama i stilu vjenčanja', 'Jedinstvena atmosfera', 'Interakcija s gostima', 'Vođenje protokola', 'Profesionalna oprema', 'Rasvjeta koja prati atmosferu i prostor'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                  <Link to="/vjencanja/" className="btn btn-primary mt-4 inline-block" aria-label="Saznajte više o DJ uslugama za vjenčanja">
                    Saznaj Više
                  </Link>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faRing} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt="DJ Vrana na vjenčanju" 
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services01}
                />
            </div>
            </section>

            <section id='dogadaji' className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out scroll-mt-[160px]">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Corporate Events
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Korporativni Događaji</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Korporativni događaji su prilika za povezivanje, opuštanje i zajedničko stvaranje nezaboravnih trenutaka izvan ureda. Glazbom i atmosferom potičem timsku energiju, dobru vibru i iskustvo koje će zaposlenici pamtiti dugo nakon završetka događaja.
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {['Odabir glazbe prilagođen tipu događaja i publici', 'Profesionalno ozvučenje cijelog prostora', 'Ambijentalna i dinamična rasvjeta', 'Vođenje važnih trenutaka događaja', 'Iskustvo s VIP događajima'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <Link to="/korporativni-dogadaji/" type="button" className="btn btn-primary mt-4 inline-block" aria-label="Saznajte više o DJ uslugama za korporativne događaje">
                  Potraži Informacije
                </Link>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 lg:left-auto lg:-right-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faBuilding} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt="Korporativni event s DJ Vranom" 
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services02}
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Private Parties
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Privatne Proslave</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Bez obzira radi li se o rođendanu, maturalnoj zabavi ili djevojačkoj večeri, svaki događaj zaslužuje glazbu koja pokreće, energiju koja okuplja i atmosferu koja se pamti. DJ Vrana stvara trenutke koji ostaju u sjećanju i čine vašu proslavu jedinstvenom.
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {['Personalizirani glazbeni pristup', 'Prilagodba za sve dobne skupine', 'Interaktivna zabava i angažman gostiju', 'Fleksibilni paketi i trajanje', 'Profesionalna rasvjeta i efekti'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <Link to="/privatne-proslave/" type="button" className="btn btn-primary mt-4 inline-block" aria-label="Saznajte više o DJ uslugama za privatne proslave">
                  Detaljnije
                </Link>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faChampagneGlasses} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt="DJ za proslavu rođendana i privatne zabave" 
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services03}
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                DJ Education
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">DJ Edukacija</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Naučite osnove i napredne vještine DJ-anja uz DJ Vranu. Radionice su praktične, zabavne i prilagođene svim razinama – od početnika do onih koji žele usavršiti svoje miksanje.
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {['Osnove DJ opreme', 'Upoznavanje s glazbenim žanrovima i strukturama pjesama', 'Tehnike miksanja i beatmatching', 'Praktično snalaženje s digitalnim DJ softverima', 'Savjeti za izgradnju DJ karijere i nastupe uživo', 'Personalizirane vježbe'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <Link to="/dj-edukacija/" type="button" className="btn btn-primary mt-4 inline-block" aria-label="Saznajte više o tečajevima i radionicama">
                  Više Informacija
                </Link>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 lg:left-auto lg:-right-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faGraduationCap} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt="Tečaj DJ-anja" 
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services04}
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-5 lg:space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Equipment Rental
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Najam Opreme</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Vrhunska DJ oprema za svaki događaj – ozvučenje, rasvjeta i mikseri koji osiguravaju savršen zvuk i atmosferu.
                </p>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-gray-300 text-sm md:text-base">
                {['Ozvučenje', 'DJ kontroleri i mikseri', 'Rasvjeta', 'Mikrofoni', 'Tehnička podrška'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <Link to="/najam-opreme/" type="button" className="btn btn-primary mt-4 inline-block" aria-label="Saznajte više o najmu opreme">
                  Saznaj Više
                </Link>
            </div>
            <div className="flex-1 relative w-full mt-6 lg:mt-0">
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-[#121212] rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faCompactDisc} className="text-[16px] md:text-[32px]" />
                </div>
                <img 
                alt="Najam profesionalnog zvučnika" 
                loading="lazy"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src={services05}
                />
            </div>
            </section>

        </div>

        <section className="bg-[#121212] py-16 md:py-24 px-4 text-center border-t border-[#d4af37]/10 w-full relative z-20">
            <div className="container mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Spremni za Nezaboravno Iskustvo?</h2>
              <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
                Kontaktirajte me danas i razgovarajmo o Vašim potrebama. Zajedno ćemo stvoriti glazbeno iskustvo koje će Vaš događaj učiniti jedinstvenim i nezaboravnim.
              </p>
              <Link to="/kontakt/" type="button" className="btn btn-primary">
                Kontaktiraj Me
              </Link>
            </div>
        </section>
        </div>
        <Footer />
    </main>
  );
};

export default PremiumDJUsluge;
