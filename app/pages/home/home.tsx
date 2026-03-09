import type { Route } from "../../+types/root";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "../../styles.css";
import "./home.scss";
import { Link } from "react-router";

import aboutImg from '../../assets/images/about.png'
import serviceImg01 from '../../assets/images/service01.webp'
import serviceImg02 from '../../assets/images/service02.webp'
import serviceImg03 from '../../assets/images/service03.webp'
import serviceImg04 from '../../assets/images/service04.webp'
import serviceImg05 from '../../assets/images/service05.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faBuilding,
  faCompactDisc,
  faChampagneGlasses,
  faMask
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DJ Vrana - Premium DJ Usluge Zagreb" },
    { name: "description", content: "Profesionalni DJ za vjenanja i evente u Zagrebu" },
  ];
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
    });
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [currentPage, setCurrentPage] = useState('pocetna');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <section className="hero">
        <div className="hero-wrapper animate-hero-bottom-glow">
          <div className="hero-bg-img relative min-h-screen h-64 overflow-hidden flex flex-col items-center justify-center pt-32 px-4 pb-20 font-sans">
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-12">
              <header className="flex flex-col items-center text-center">
                <div className="hero-badge">PREMIUM DJ USLUGE</div>
                <h1 className="text-6xl md:text-[5rem] font-bold tracking-tight leading-[1.05]">
                  <span className="text-[#f4f4f5]">Pretvorite Svaki Event u </span>
                  <span className="hero-highlight">Nezaboravno Iskustvo</span>
                </h1>
                
                <p className="text-lg md:text-[1.1rem] text-[#a1a1aa] max-w-2xl mb-10 leading-relaxed">
                  Profesionalni DJ sa vrhunskom opremom i strašću prema glazbi.
                  Specializiran za vjenčanja, korporativne događaje i ekskluzivne
                  proslave.
                </p>
              </header>

              <div className="cta-buttons">
                <Link
                  className="btn btn-primary"
                  onClick={() => window.scrollTo(0, 0)}
                  to='/kontakt'
                >
                    Rezerviraj Termin
                </Link>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToSection("paketi")}
                >
                  Pogledaj Pakete
                </button>
              </div>
            </div>

          </div>
          <div className="bg-black absolute top-0 left-0 h-screen w-full opacity-75"></div>
        </div>
        <div className="h-screen w-full relative"></div>
      </section>

      <section className="about">
        <div className="relative">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-40px] left-[50px] [animation-delay:0s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
          <div className="container relative min-h-screen flex items-center justify-center py-[60px] sm:py-[80px] text-white font-sans">

            <div className="relative z-10 max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[80px] items-center text-center lg:text-left">
              
              <div className="relative max-w-[450px] lg:max-w-none w-full">
                <div className="relative p-2 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <img 
                      src={aboutImg} 
                      alt="DJ Profil" 
                      className="w-full h-auto block aspect-[3/4] object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] to-transparent to-[60%] flex items-end justify-center lg:justify-start p-[30px]">
                      <div className="flex gap-[15px]">
                        <Link to="https://www.instagram.com/ivan.vranesa/" target='blank' className="w-[45px] h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-[3px]" aria-label="Instagram">
                          <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
                        </Link>
                        <Link to="https://www.tiktok.com/@dj.proslave" target='blank' className="w-[45px] h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-[3px]" aria-label="TikTok">
                          <FontAwesomeIcon icon={faTiktok} className="text-[18px]" />
                        </Link>
                        <Link to="https://www.youtube.com/@IvanVrane%C5%A1a" target='blank' className="w-[45px] h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-[3px]" aria-label="YouTube">
                          <FontAwesomeIcon icon={faYoutube} className="text-[18px]" />
                        </Link>
                        <Link to="#" target='blank' className="w-[45px] h-[45px] rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#d4af37] text-[20px] transition-all duration-300 backdrop-blur-[10px] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-[3px]" aria-label="SoundCloud">
                          <FontAwesomeIcon icon={faSoundcloud} className="text-[18px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-[20px]">
                <header className="scroll-animate">
                  <span className="inline-block text-[12px] tracking-[3px] uppercase text-[#d4af37] font-semibold mb-[20px] py-[8px] px-[20px] bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] rounded-[30px]">
                    Premium DJ Usluge
                  </span>
                  
                  <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold leading-[1.1] mb-[20px] bg-gradient-to-br from-[#ffffff] to-[#d4af37] text-transparent bg-clip-text">
                    Ivan Vraneša
                  </h2>
                  
                  <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-[#cccccc] mb-[30px] font-light">
                    DJ | House, Techno & Electronic
                  </p>
                  
                  <p className="text-[1rem] lg:text-[1.1rem] leading-[1.8] text-[#cccccc] mb-[35px]">
                    S više od 10 godina iskustva na sceni elektronske glazbe, stvaram jedinstvene glazbene doživljaje koji ostavljaju nezaboravan dojam. Od intimnih klubskih večeri do velikih festivala, svaki nastup je pažljivo kreiran da publiku odvede na glazbeno putovanje.
                  </p>
                </header>

                <div className="flex gap-[25px] sm:gap-[40px] mb-[40px] flex-wrap justify-center lg:justify-start">
                  <div className="flex-1 min-w-[120px]">
                    <span className="text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">500+</span>
                    <span className="text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Nastupa</span>
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <span className="text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">15</span>
                    <span className="text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Gradova</span>
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <span className="text-[2rem] lg:text-[2.5rem] font-bold text-[#d4af37] block mb-[5px]">10K+</span>
                    <span className="text-[0.9rem] text-[#cccccc] uppercase tracking-[1px]">Fanova</span>
                  </div>
                </div>

                <Link to="/o-meni" className="cta-button group inline-flex items-center justify-center w-full sm:w-auto gap-[12px] py-[18px] px-[40px] text-[1rem] font-semibold uppercase tracking-[1px] text-[#0a0a0a] bg-[#d4af37] rounded-full transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] relative overflow-hidden no-underline">
                  Saznaj više o meni
                  <span className="transition-transform duration-300 group-hover:translate-x-[5px]">→</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="py-30">
            <div className="relative min-h-screen bg-night">
              <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
              <div className="relative mx-auto w-full">
              <header className="mx-auto max-w-2xl text-center section-header scroll-animate">
                <p className="section-subtitle">Što Nudim?</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                  Premium DJ Usluge
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                  Izaberi format nastupa i atmosferu — sve ostalo (flow, dinamika i produkcija) se
                  prilagođava tvom događaju.
                </p>
              </header>
              <ServicesPremium />
            </div>
              
            </div>
          </div>
        </div>
      </section>

      <section id="paketi" className="pricing pt-10 pb-50 scroll-mt-[80px]">
        <div className="container relative">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern animate-grid"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[200px] left-[-100px] [animation-delay:0s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
          <header className="section-header scroll-animate">
            <p className="section-subtitle">Transparentne Cijene</p>
            <h2 className="section-title">Premium Paketi</h2>
            <p className="section-description">
              Odaberite paket koji najbolje odgovara vašim potrebama
            </p>
          </header>

          <div className="pricing-grid">
            <div className="pricing-card scroll-animate flex flex-col justify-between">
              <div>
                <h3 className="pricing-name">Essential</h3>
                <p className="pricing-duration">Do 4 sata</p>
              
                <ul className="pricing-features">
                  <li>Profesionalna DJ oprema</li>
                  <li>Sound sistem do 150 ljudi</li>
                  <li>LED rasvjeta - osnovni paket</li>
                  <li>Pripreme i konzultacije</li>
                  <li>Playlist prilagođen eventu</li>
                </ul>
              </div>
                
              <Link
                className="btn btn-secondary"
                onClick={() => window.scrollTo(0, 0)}
                to='/kontakt'
              >
                  Rezerviraj
              </Link>
            </div>

            <div className="pricing-card featured scroll-animate flex flex-col justify-between">
              <div>
                <div className="pricing-badge">Najpopularniji</div>
                <h3 className="pricing-name">Premium</h3>
                <p className="pricing-duration">Do 6 sati</p>

                <ul className="pricing-features">
                  <li>Vrhunska DJ oprema</li>
                  <li>Premium sound sistem do 300 ljudi</li>
                  <li>LED rasvjeta - premium paket</li>
                  <li>Dim mašina + specijalni efekti</li>
                  <li>Personalizirane animacije</li>
                  <li>Backup oprema</li>
                  <li>Neograničene konzultacije</li>
                </ul>
              </div>
              
                <Link
                  className="btn btn-secondary"
                  onClick={() => window.scrollTo(0, 0)}
                  to='/kontakt'
                >
                    Rezerviraj
                </Link>
            </div>

            <div className="pricing-card scroll-animate flex flex-col justify-between">
              <div>
                <h3 className="pricing-name">Luxury</h3>
                <p className="pricing-duration">Bez vremenskog ograničenja</p>
                <ul className="pricing-features">
                  <li>Ekskluzivna oprema</li>
                  <li>Premium sound sistem 500 ljudi</li>
                  <li>Kompletna svjetlosna produkcija</li>
                  <li>Profesionalne laserske projekcije</li>
                  <li>Video mapping mogućnost</li>
                  <li>Personalni event manager</li>
                  <li>VIP tretman</li>
                </ul>
              </div>
                  
              <Link
                className="btn btn-secondary"
                onClick={() => window.scrollTo(0, 0)}
                to='/kontakt'
              >
                  Rezerviraj
              </Link>
            </div>
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
  image: any;
  imagePosition?: string;
  description: string;
  path: string;
  featured?: boolean;
  bullets?: string[];
}

const services: Item[] = [
  {
    id: "weddings",
    title: "Ekskluzivna Vjenčanja",
    badge: "NAJTRAŽENIJE",
    icon: faHeart,
    image: serviceImg01,
    imagePosition: "50% 20%",
    description:
      "Potpuno prilagođen muzički program, vrhunska oprema i besprijekorna izvedba za vaš poseban dan. Uključuje konsultacije, playlist prilagođavanje i backup opremu.",
    path: "/vjencanja",
    featured: true,
    bullets: ["Konsultacije i plan događaja", "Playlist prilagođavanje", "Backup oprema"],
  },
  {
    id: "corporate",
    title: "Korporativni Eventi",
    icon: faBuilding,
    image: serviceImg02,
    imagePosition: "50% 10%",
    description:
      "Profesionalni muzički program za poslovne događaje, konferencije i korporativne proslave.",
    path: "/korporativni-eventi",
  },
  {
    id: "club",
    title: "Klupski Nastupi",
    icon: faCompactDisc,
    image: serviceImg03,
    imagePosition: "center",
    description:
      "Energične večeri s najboljim house, techno i elektronskim setovima za vrhunsku atmosferu.",
    path: "/klubovi-i-festivali",
  },
  {
    id: "private",
    title: "Privatne Proslave",
    icon: faChampagneGlasses,
    image: serviceImg04,
    imagePosition: "50% 20%",
    description:
      "Personalizirani muzički doživljaj za rođendane, godišnjice i privatne događaje svih veličina.",
    path: "/privatne-proslave",
  },
  {
    id: "festival",
    title: "Festival Setovi",
    icon: faMask,
    image: serviceImg05,
    imagePosition: "center",
    description:
      "Spektakularni nastupi za velike outdoor i indoor festivale s potpunom produkcijskom podrškom.",
    path: "/klubovi-i-festivali",
  },
];

function Card({ title, badge, icon, image, imagePosition = "center", description, path, bullets }: Item) {
  return (
    <article
      className={[
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.2)] bg-white/5",
        "p-6 md:p-7 backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)]",
        "transition duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.2)]",
        "animate-fadeInUp",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -inset-32 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
        <div className="absolute left-[40%] top-[40%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(212,175,55,0.25)]" />
        <div className="absolute right-[20%] bottom-[10%] h-72 w-72 rounded-full bg-[rgba(212,175,55,0.25)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

      <div>
        <div className={[
          "group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5",
          "backdrop-blur-xl mb-6",
          ].join(" ")}
        >
          <img 
            src={image} 
            alt="DJ Profil" 
            className="w-full h-auto block aspect-[16/7] object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <header className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            {badge && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-[rgba(212,175,55,0.2)] px-3 py-1 text-xs font-semibold tracking-wide text-gold">
                {badge}
              </div>
            )}

            <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
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
          Premium DJ Usluga
        </span>
        
        <button>
          <Link
            to={path}
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
          >
            Detalji
          </Link>
        </button>
      </div>
    </article>
  );
}

function ServicesPremium() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        {featured && (
          <div className="md:col-span-7 md:row-span-2">
            <Card key={featured.id} {...featured} />
          </div>
        )}

        {rest[0] && (
          <div className="md:col-span-5">
            <Card key={rest[0].id} {...rest[0]} />
          </div>
        )}

        {rest[1] && (
          <div className="md:col-span-5">
            <Card key={rest[1].id} {...rest[1]} />
          </div>
        )}

        {rest[2] && (
          <div className="md:col-span-6">
            <Card key={rest[2].id} {...rest[2]} />
          </div>
        )}
        {rest[3] && (
          <div className="md:col-span-6">
            <Card key={rest[3].id} {...rest[3]} />
          </div>
        )}
      </div>
  );
}