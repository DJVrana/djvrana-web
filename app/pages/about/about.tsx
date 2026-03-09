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

  return (
    <main>
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
                        Strast prema ritmu, iskustvo za pultom i posvećenost detaljima koji vaš event čine besprijekornim.                    </p>
                </div>
            </header>
            <div className="hero-content-aobut">
                <div className="profile-image-container">
                    <div className="profile-image">
                    <img 
                        src={djVranaLogo}
                        alt="DJ Profil"
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
                Već više od 10 godina stvaram jedinstvena muzička iskustva koja pretvaraju svaki događaj u nezaboravan trenutak. Moja misija je spojiti vrhunski kvalitet zvuka s emocionalnom povezanošću s publikom.
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
                <h3 className="text-xl font-bold mb-4">Početak Putovanja</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    Moja ljubav prema muzici započela je u ranoj mladosti, eksperimentirajući s različitim žanrovima i stilovima. Od prvih mikseva u malim klubovima do velikih događaja, svaki nastup je bio lekcija i novi korak naprijed.
                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop" 
                    alt="DJ za pultem" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                </div>

                <div 
                ref={(el) => void (storyRefs.current[1] = el)}
                className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-y-8 group delay-100"
                >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faZap} className='text-[24px]' />
                </div>
                <h3 className="text-xl font-bold mb-4">Profesionalni Pristup</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    S godinama iskustva dolazi i razumijevanje da svaki događaj ima svoju priču. Koristim profesionalnu opremu najnovije generacije i detaljno planiram svaki set kako bih osigurao besprijekornu izvedbu.
                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=400&fit=crop" 
                    alt="DJ oprema" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                </div>

                <div 
                ref={el => void (storyRefs.current[2] = el)}
                className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-x-12 group delay-200"
                >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faHeadphones} className='text-[24px]' />
                </div>
                <h3 className="text-xl font-bold mb-4">Posebnost</h3>
                <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                    Ono što me izdvaja je sposobnost čitanja publike i prilagođavanja trenutku. Ne puštam samo glazbu - stvaram iskustvo koje rezonira s emocijama i trenutkom, ostavljajući trajni dojam na svakog prisutnog.
                </p>
                <div className="rounded-xl overflow-hidden h-48">
                    <img 
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop" 
                    alt="DJ nastup" 
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
                { num: '500+', label: 'Događaja' },
                { num: '10+', label: 'Godina Iskustva' },
                { num: '98%', label: 'Zadovoljnih Klijenata' },
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

            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/5 border border-[#d4af37]/20">
                    <img 
                    src={serviceImg02} 
                    alt="DJ u akciji" 
                    className="w-full h-auto"
                    />
                </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-[#d4af37]">Iza Pulta</h3>
                <p className="text-[#b8b8b8] leading-relaxed">
                    Svaki nastup je jedinstveno putovanje. Pratim energiju publike, njihove reakcije i emocije kako bih kreirao savršen trenutak.
                </p>
                <p className="text-[#b8b8b8] leading-relaxed">
                    Za mene DJ pult nije samo oprema - to je instrument kroz koji prenosim priče i stvaram nezaboravne trenutke.
                </p>
                </div>
            </div>

            <blockquote className="text-2xl md:text-3xl font-light italic text-center mb-16 px-8 py-12 border-l-4 border-r-4 border-[#d4af37] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent">
                "Glazba nije samo zvuk - to je emocija, energija i veza između ljudi. Moj posao je stvoriti trenutke koji se pamte zauvijek."
            </blockquote>
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
                { icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />, path: "/korporativni-eventi", title: 'Korporativni Događaji', desc: 'Profesionalan i sofisticiran pristup koji odražava vrijednosti vašeg brenda.' },
                { icon: <FontAwesomeIcon icon={faChampagneGlasses} className="w-8 h-8" />, path: "/privatne-proslave", title: 'Privatne Zabave', desc: 'Od rođendana do proslave godišnjica - stvaram energiju koja podiže događaj na višu razinu.' },
                { icon: <FontAwesomeIcon icon={faMicrophone} className="w-8 h-8" />, path: "/klubovi-i-festivali", title: 'Klubski Nastupi', desc: 'Dinamični setovi koji drže plesni podij punim cijelu noć. Ekspertiza u crossover žanrovima.' }
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
                        <button>
                            <Link
                                to={spec.path}
                                type="button"
                                className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
                            >
                                Detalji
                            </Link>
                        </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="py-24 relative overflow-hidden">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[150px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="container">
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Rezervirajte Svoj Termin</h2>
                    <p className="text-xl text-[#b8b8b8] mb-10">
                        Spremni ste podići svoj događaj na vrhunsku razinu? Kontaktirajte me danas i razgovarajmo o vašoj viziji.
                    </p>
                    <Link 
                        to="/kontakt" 
                        className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                    >
                        Pošalji Upit
                    </Link>
                    <div className='mx-auto rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[10px] w-[675px]'>
                        <DJControllerApp></DJControllerApp>
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
