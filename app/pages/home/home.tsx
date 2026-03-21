import type { Route } from "../../+types/root";
import { useEffect, useState } from "react";
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

import weddingsVideoPoster from '../../assets/images/weddingsPoster.webp';
import eventsVideoPoster from '../../assets/images/eventsPoster.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faGraduationCap,
  faCompactDisc,
  faChampagneGlasses,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com"; 
  const title = "DJ Vrana | Vrhunski DJ za Vjenčanja i Proslave u Zagrebu";
  const description = "Profesionalni DJ za vjenčanja, privatne proslave i korporativne evente u Zagrebu i okolici. Više od 5 godina iskustva, vrhunska oprema i nezaboravna atmosfera. Rezervirajte svoj termin!";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "DJ za vjenčanja, DJ Zagreb, DJ za svadbe, najam opreme, DJ za proslave, DJ Vrana, glazba za vjenčanje" },
    { name: "robots", content: "index, follow" },
    
    { property: "og:type", content: "website" },
    { property: "og:url", content: domain },
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
    { tagName: "link", rel: "canonical", href: domain }
  ];
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
    });
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
  }, []);

  const [currentPage, setCurrentPage] = useState('pocetna');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "DJ Vrana",
    "image": "https://djvrana.com/dj-vrana-og-image.png",
    "description": "Profesionalni DJ za vjenčanja, privatne proslave i korporativne evente u Zagrebu.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zagreb",
      "addressRegion": "Grad Zagreb",
      "addressCountry": "HR"
    },
    "priceRange": "$$",
    "url": "https://djvrana.com",
    "sameAs": [
      "https://www.instagram.com/ivan.vranesa/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@IvanVraneša",
      "https://soundcloud.com/djvrana"
    ]
  };

  return (
    // Dodan overflow-x-hidden kako bi se spriječio horizontalni scroll zbog radial blur efekata
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
                <div className="hero-badge mb-4">DJ ZA VJENČANJA I PROSLAVE</div>

                <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold tracking-tight leading-[1.2] md:leading-[1.05]">
                  <span className="text-[#f4f4f5]">
                    Profesionalni DJ za vjenčanja u
                  </span>{" "}
                  <span className="inline-block relative pb-1 mt-2 md:mt-0 bg-[linear-gradient(135deg,#d4af37_0%,#f4e5a0_50%,#d4af37_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                    Zagrebu i okolici
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-[1.1rem] text-[#a1a1aa] max-w-2xl mb-8 md:mb-10 mt-6 md:mt-6 leading-relaxed px-2">
                  Specijaliziran za svadbe, privatne proslave i korporativne događaje,
                  s ciljem stvaranja vrhunske atmosfere i nezaboravnog plesnog podija.
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
                      alt="Ivan Vraneša - DJ Vrana na nastupu u Zagrebu" 
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
                    O MENI
                  </span>
                  
                  <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold leading-[1.1] mb-[15px] sm:mb-[20px] bg-gradient-to-br from-[#ffffff] to-[#d4af37] text-transparent bg-clip-text">
                    DJ Vrana
                  </h2>
                  
                  <p className="text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-[#cccccc] mb-[20px] sm:mb-[30px] font-light">
                    DJ za svadbe | Evente | Privatne proslave
                  </p>
                  
                  <p className="text-[0.95rem] sm:text-[1rem] lg:text-[1.1rem] leading-[1.7] sm:leading-[1.8] text-[#cccccc] mb-[30px] sm:mb-[35px] text-justify sm:text-left px-2 sm:px-0">
                    S više od 5 godina iskustva kao DJ na vjenčanjima i proslavama, DJ Vrana stvara energiju koja puni plesni podij i spaja generacije kroz glazbu. Svaki nastup pažljivo je prilagođen publici i željama klijenata kako bi proslava imala savršenu atmosferu od početka do kraja.
                  </p>
                </header>

                <div className="flex gap-[15px] sm:gap-[40px] mb-[40px] flex-wrap justify-center lg:justify-start">
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">300+</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Nastupa</span>
                  </div>
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">5+</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Godina iskustva</span>
                  </div>
                  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">50+</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Lokacija</span>
                  </div>
                </div>

                <Link to="/o-meni/" aria-label={`Saznajte više o meni`} className="cta-button group inline-flex items-center justify-center w-full sm:w-auto gap-[12px] py-[15px] sm:py-[18px] px-[30px] sm:px-[40px] text-[0.95rem] sm:text-[1rem] font-semibold uppercase tracking-[1px] text-[#0a0a0a] bg-[#d4af37] rounded-full transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] relative overflow-hidden no-underline">
                  Saznajte više o meni
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
                  <p className="section-subtitle">Što nudim?</p>
                  <h2 className="text-balance text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    Profesionalne DJ usluge
                  </h2>
                  <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                    Pružam cjelovita rješenja za glazbu i atmosferu — prilagođena svakom događaju.
                  </p>
                </header>
                <ServicesPremium />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video-nastup" className="video-showcase pt-10 pb-20 sm:pb-50 scroll-mt-[80px]">
        <div className="container relative px-4 sm:px-6 mx-auto">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
          
          <header className="section-header scroll-animate text-center mx-auto mb-10 sm:mb-16 px-4">
            <p className="section-subtitle">Dio Atmosfere</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
              Zavirite na Plesni Podij
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Kratki isječak energije i atmosfere koju donosim na svaki događaj – ritam koji pokreće, glazba koja spaja i trenuci koji se pamte.
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
            {/* Ovdje je ključna izmjena za gumb - maknut fiksni px-40 */}
            <Link to="/galerija/" aria-label={`Pogledajte više u galeriji`} className="w-full sm:w-auto px-8 md:px-20 btn btn-primary text-center mx-4 sm:mx-0 py-3 sm:py-4">
              Pogledaj više sadržaja
            </Link>
          </div>
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
}

const services: Item[] = [
  {
    id: "weddings",
    title: "Vjenčanja",
    badge: "Istaknuto",
    icon: faHeart,
    video: weddingsVideo,
    poster: weddingsVideoPoster,
    mediaPosition: "center",
    description:
      "Učinite svoje vjenčanje nezaboravnim uz DJ Vranu. Profesionalno odabrana glazba i savršena atmosfera pratit će vas od ceremonije do posljednjeg plesa, prilagođeno vašim željama i stilu svadbe.",
    path: "/vjencanja/",
    featured: true,
    bullets: ["Vrhunska DJ oprema", "Pažljivo osmišljen repertoar", "Konzultacija s mladencima", "Animacija gostiju", "Vođenje protokola"],
  },
  {
    id: "events",
    title: "Događaji",
    icon: faChampagneGlasses,
    video: eventsVideo,
    poster: eventsVideoPoster,
    mediaPosition: "center",
    description:
      "Podignite svaki događaj uz DJ Vranu, donosim Vam vrhunsku glazbu i energiju koja traje cijelu noć.",
    path: "/usluge/#dogadaji",
    bullets: ["Rođendani i proslave", "Korporativni događaji", "Djevojačke i momačke večeri", "Privatne zabave", "Festivali i koncerti"],
  },
  {
    id: "equipment",
    title: "Najam Opreme",
    icon: faCompactDisc,
    image: serviceImg02,
    mediaPosition: "50% 36%",
    description:
      "Vrhunska DJ oprema za svaki događaj -- ozvučenje, rasvjeta i mikseri koji osiguravaju savršen zvuk i atmosferu.",
    path: "/najam-opreme/",
    bullets: ["Ozvučenje", "DJ kontroleri i mikseri", "Rasvjeta", "Mikrofoni", "Tehnička podrška"],
  },
  {
    id: "education",
    title: "DJ Edukacija",
    icon: faGraduationCap,
    image: serviceImg01,
    mediaPosition: "50% 20%",
    description:
      "Naučite osnove i napredne vještine DJ-anja uz DJ Vranu. Radionice su praktične, zabavne i prilagođene svim razinama -- od početnika do onih koji žele usavršiti svoje miksanje.",
    path: "/dj-edukacija/",
    bullets: ["Osnove DJ opreme i tehnike miksanja", "Praktične vježbe i live miks sesije", "Savjeti za kreiranje set lista i energiju publike", "Individualni pristup i personalizirani program", "Priprema za nastupe"],
  }
];

function Card({ title, badge, icon, image, video, poster, mediaPosition = "center", description, path, bullets }: Item) {
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
            aria-label={`${title} - DJ Vrana usluge video`}
          >
            <source src={video} type="video/mp4" />
            Tvoj preglednik ne podržava video.
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
                <div className="absolute mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-[rgba(212,175,55,0.2)] px-3 py-1 text-xs font-semibold tracking-wide text-gold">
                  {badge}
                </div>
              )}

              <h3 className="pt-[2.5rem] text-xl font-extrabold tracking-tight text-white md:text-2xl">
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
            Profesionalna DJ Usluga
          </span>
          
          <Link
            to={path}
            aria-label={`Saznajte više o usluzi: ${title}`}
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
          >
            Detalji
          </Link>
        </div>
      </div>
    </article>
  );
}

function ServicesPremium() {
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
