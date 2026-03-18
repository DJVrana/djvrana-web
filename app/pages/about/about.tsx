import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic,
  faZap,
  faHeadphones,
  faDiamond,
  faBriefcase,
  faChampagneGlasses,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons';

import "./about.scss";

import Navbar from '~/components/navbar/navbar';
import Footer from '~/components/footer/footer';
import { Link } from 'react-router';
import DJControllerApp from '~/components/dj-controller/djController';
import serviceImg02 from '../../assets/images/service02.webp'
import djVranaLogo from '../../assets/images/dj-vrana-logo.png'
import about01 from '../../assets/images/about01.webp'
import about02 from '../../assets/images/about02.webp'
import about03 from '../../assets/images/about03.webp'
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com";
  const title = "O meni | DJ Vrana - Ivan Vraneša";
  const description = "Upoznajte DJ Vranu. Više od 5 godina iskustva u stvaranju nezaboravne atmosfere na vjenčanjima, rođendanima i korporativnim eventima uz profesionalni pristup.";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "DJ Vrana o meni, Ivan Vraneša DJ, iskustvo DJ za svadbe, profesionalni DJ biografija" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph (Facebook, Instagram, LinkedIn)
    { property: "og:type", content: "profile" }, // Ovdje koristimo "profile" umjesto "website"
    { property: "profile:first_name", content: "Ivan" },
    { property: "profile:last_name", content: "Vraneša" },
    { property: "profile:username", content: "DJ Vrana" },
    { property: "og:url", content: `${domain}/o-meni` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { property: "og:image", content: `${domain}/dj-vrana-og-image-square.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image-square.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "1200" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${domain}/dj-vrana-og-image.png` },
    
    // Canonical link
    { tagName: "link", rel: "canonical", href: `${domain}/o-meni` }
  ];
}

const AboutMe = () => {
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentPage, setCurrentPage] = useState<string>('o-meni');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          entry.target.classList.remove('opacity-0', '-translate-x-12', 'translate-x-12', 'translate-y-8');
        }
      });
    }, observerOptions);

    storyRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
    });
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
  }, []);

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Vraneša",
    "alternateName": "DJ Vrana",
    "jobTitle": "Professional DJ",
    "description": "Profesionalni DJ za vjenčanja, privatne proslave i korporativne evente s preko 5 godina iskustva.",
    "url": "https://djvrana.com/o-meni",
    "image": "https://djvrana.com/ivan-vranesa-profil.png",
    "knowsAbout": ["DJing", "Wedding Entertainment", "Event Management", "Sound Engineering"],
    "sameAs": [
      "https://www.instagram.com/ivan.vranesa/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@IvanVraneša",
      "https://soundcloud.com/djvrana"
    ]
  };

  return (
    <main>
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} 
        />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="font-sans text-white overflow-x-hidden">

        <section className='relative pt-40'>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[150px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <header>
                <div className="relative text-center pt-8 pb-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-4xl h-18 md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight">
                      Tko Sam Ja
                    </h1>
                    <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                        Strast prema ritmu, iskustvo za pultom i posvećenost detaljima koji vaš događaj čine besprijekornim.                    </p>
                </div>
            </header>
            <div className="hero-content-aobut">
                <div className="profile-image-container">
                    <div className="profile-image">
                    <img 
                        src={djVranaLogo}
                        alt="DJ Vrana logo - Ivan Vraneša, profesionalni DJ za događaje"
                    />
                    </div>
                </div>
            </div>
        </section>

        <section id="about-section" className="py-24 relative">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <div className="container">

            <header className="mx-auto max-w-2xl text-center section-header scroll-animate">
                <p className="section-subtitle">Moja Priča</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Strast Koja Stvara Atmosferu
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                    Već više od 5 godina stvaram nezaboravnu glazbenu atmosferu koja pokreće emocije i okuplja ljude. Sa svakim nastupom težim učiniti svaki trenutak posebnim, bilo da je riječ o prvom plesu, proslavi rođendana ili klupskom događaju.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                ref={el => void (storyRefs.current[0] = el)}
                className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 -translate-x-12 group"
                >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faMusic} className='text-[24px]' />
                </div>
                <h3 className="text-xl font-bold mb-4">Početak putovanja</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    Moja ljubav prema glazbi počela je još u osnovnoj školi. Eksperimentirao sam s miksanjem raznih žanrova, promatrao dj-eve na internetu i samostalno učio. Od prvih mikseva u malim klubovima do velikih događaja s tisuću ljudi, svaki nastup bio je lekcija i korak naprijed
                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src={about01}
                    alt="DJ Vrana miksa glazbu na početku karijere" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                </div>

                <div 
                ref={(el) => void (storyRefs.current[1] = el)}
                className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-y-8 group delay-100"
                >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faHeadphones} className='text-[24px]' />
                </div>
                <h3 className="text-xl font-bold mb-4">Posebnost</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    Ono što me izdvaja je sposobnost brzog čitanja publike i prilagođavanja trenutku. Ne puštam samo glazbu – stvaram iskustvo koje miješa emocije i posebnost trenutka, ostavljajući trajni dojam na svakog prisutnog.
                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src={about02}
                    alt="Profesionalna DJ oprema i slušalice na nastupu" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                </div>

                <div 
                ref={el => void (storyRefs.current[2] = el)}
                className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-x-12 group delay-200"
                >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faZap} className='text-[24px]' />
                </div>
                <h3 className="text-xl font-bold mb-4">Profesionalni pristup</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    S godinama iskustva dolazi i razumijevanje da svaki događaj ima svoju priču. Koristim profesionalnu opremu najnovije generacije i detaljno planiram svaki set kako bih osigurao energiju na najvišoj razini.                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src={about03}
                    alt="DJ Vrana pušta glazbu i zabavlja publiku na noćnom događaju" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="py-16 border-y border-[#d4af37]/10 bg-[#0a0a0a]">
            <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                { num: '300+', label: 'Događaja' },
                { num: '5+', label: 'Godina Iskustva' },
                { num: '100%', label: 'Zadovoljnih Klijenata' },
                { num: '50+', label: 'Vjenčanja' }
                ].map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">{stat.num}</div>
                    <div className="text-sm uppercase tracking-wider text-[#b8b8b8]">{stat.label}</div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="py-24 relative">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <div className="max-w-4xl mx-auto">
            <header className="mx-auto max-w-2xl text-center section-header scroll-animate">
                <p className="section-subtitle">Filozofija</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Moj Pristup
                </h2>
            </header>

            <div className='container'>
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/5 border border-[#d4af37]/20">
                        <img 
                        src={serviceImg02} 
                        alt="DJ Vrana u akciji na svadbi - stvaranje savršene atmosfere" 
                        className="w-full h-auto"
                        />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-[#d4af37]">Iza Pulta</h3>
                    <p className="text-[#b8b8b8] leading-relaxed">
                        Vjerujem da glazba nije samo zvuk, nego iskustvo koje povezuje ljude. Moj pristup temelji se na slušanju, prilagodbi i stvaranju trenutaka koji se pamte. Svaki događaj tretiram kao jedinstvenu priču, gdje je cilj više od samog miksa – stvaranje emocija i atmosfere koja će se pamtiti.
                    </p>
                    <p className="text-[#b8b8b8] leading-relaxed">
                        Za mene to nije samo još jedan datum u kalendaru – svaki događaj je priča koju želim prenijeti. Kroz glazbu stvaram trenutke, emocije i uspomene koje ostaju s vama dugo nakon posljednjeg plesa.
                    </p>
                    </div>
                </div>

                <blockquote className="text-2xl md:text-3xl font-light italic text-center mb-16 px-8 py-12 border-l-4 border-r-4 border-[#d4af37] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent">
                    "Glazba nije samo zvuk - to je emocija, energija i veza između ljudi. Moj posao je stvoriti trenutke koji se pamte zauvijek."
                </blockquote>
                </div>
            </div>
        </section>

        <section className="py-24 relative">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <div className="container">
            <header className="mx-auto max-w-2xl text-center section-header scroll-animate">
                <p className="section-subtitle">Specijalizacija</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                U Čemu Sam Najbolji
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                Svaki tip događaja zahtijeva specifičan pristup i razumijevanje. Evo područja u kojima iznimujem.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                { icon: <FontAwesomeIcon icon={faDiamond} className="w-8 h-8" />, path: "/vjencanja", title: 'Vjenčanja', desc: 'Stvaram romantičnu i elegantnu atmosferu koja čini vaš poseban dan još nezaboravnijim.' },
                { icon: <FontAwesomeIcon icon={faChampagneGlasses} className="w-8 h-8" />, path: "/privatne-proslave", title: 'Rođendani', desc: 'Proslava tvog posebnog dana zaslužuje glazbu koja pokreće, energiju koja zarazi i atmosferu koja ostaje u sjećanju. Bilo da je manja zabava ili veći party, svaki rođendan pretvaram u događaj o kojem će se pričati danima.' },
                { icon: <FontAwesomeIcon icon={faMicrophone} className="w-8 h-8" />, path: "/privatne-proslave", title: 'Maturalne zabave', desc: 'Ovo je noć koju dugo čekate – završetak jedne faze i početak novih avantura. Svojom glazbom stvaram energiju koja povezuje sve prisutne, od prvog do posljednjeg plesa, i osiguravam da se smijeh, ples i dobre vibracije pamte još dugo nakon što svjetla ugase.' },
                { icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />, path: "/korporativni-dogadaji", title: 'Korporativni Događaji', desc: 'Korporativni događaji su prilika za povezivanje i opuštanje od posla. Svakom događaju pristupam s ciljem da glazba i atmosfera potaknu zajedništvo, dobre vibracije i nezaboravne trenutke za cijeli tim.' }
                ].map((spec, i) => (
                <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-transparent hover:border-[#d4af37]/30 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                        <div className="relative hidden text-[#d4af37] h-10 w-10 shrink-0 rounded-2xl border border-white/10 bg-white/1 md:block mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                               {spec.icon}
                             </div>
                        </div>
                        <h4 className="text-xl font-bold mb-4">{spec.title}</h4>
                        <p className="text-[#808080] text-sm leading-relaxed">{spec.desc}</p>
                    </div>
                    <div className='mt-6'>
                        <Link
                            to={spec.path}
                            aria-label={`Saznajte više o usluzi: ${spec.title}`}
                            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
                        >
                            Detalji
                        </Link>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="py-24 relative overflow-hidden">
            <div className="scroll-animate">
                <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[150px] left-[-100px] [animation-delay:0s]"></div>
                <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
                <div className="container mx-auto">
                    <div className='max-w-3xl mx-auto text-center'>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Rezervirajte Svoj Termin</h2>
                        <p className="text-xl text-[#b8b8b8] mb-10">
                            Osigurajte svoj datum i učinite svoj događaj nezaboravnim. Kontaktirajte me već danas i krenimo zajedno stvarati savršenu atmosferu!
                        </p>
                        <Link 
                            to="/kontakt" 
                            className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                        >
                            Pošaljite Upit
                        </Link>
                        <div className='mx-auto rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[10px] max-w-[595px] overflow-hidden'>
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
};

export default AboutMe;
