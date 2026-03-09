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

export default function Vjencanja() {
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

  return (
    <main>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="min-h-screen text-white font-sans">
        <section className="text-center mb-16 relative wedding-hero-bg-img py-40">
            <div className="hero-badge">PREMIUM DJ USLUGE</div>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold bg-gradient-to-br from-[#d4af37] via-[#f4e5a0] to-[#d4af37] bg-clip-text text-transparent mb-5 tracking-tight">
                Vjenčanja
            </h1>
            <p className="text-lg md:text-xl text-[#a0a0a0] max-w-[700px] mx-auto leading-[1.8]">
                Stvorite nezaboravnu atmosferu za najvažniji dan vašeg života s profesionalnom glazbenom pratnjom
            </p>
        </section>
        <section className='wedding'>
            <div className='container'>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center mb-20">
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
                    <div className="relative lg:max-w-none w-full">
                        <div className="relative p-1 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                            <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                                <img 
                                src="https://images.unsplash.com/photo-1618107095181-e3ba0f53ee59?w=800&h=600&fit=crop"
                                alt="DJ Profil" 
                                className="w-full h-auto block object-cover"
                                />
                            </div>
                        </div>
                    </div>

                <div className="py-5">
                    <span className="inline-block px-4 mb-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                    Premium Wedding
                    </span>
                    <h2 className="text-[1.5rem] md:text-[2rem] mb-6 text-white font-semibold">
                    Vaše savršeno vjenčanje zaslužuje savršenu glazbu
                    </h2>
                    <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                    Glazba je srce svakog vjenčanja. S dugogodišnjim iskustvom u stvaranju nezaboravnih trenutaka, pružam profesionalnu DJ uslugu koja će učiniti vaš poseban dan još ljepšim.
                    </p>
                    <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                    Od prvog plesa do posljednje pjesme, brižljivo biram svaku melodiju kako bi odražavala vašu priču i održala goste na plesnom podiju kroz cijelu noć.
                    </p>
                </div>
                </div>

                <div className="scroll-animate relative bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-[rgba(10,10,10,0.8)] border border-[#d4af37]/10 rounded-[20px] p-6 sm:p-10 md:p-[60px_40px] mt-10">
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
                    <header>
                        <p className="section-subtitle text-center">Što Očekivati</p>
                        <h2 className="text-[1.75rem] mb-10 text-center text-white font-semibold">
                            Što uključuje usluga
                        </h2>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[30px]">
                        
                        <div className="p-[30px] bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                            <div className="relative hidden text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 md:block mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                                    <FontAwesomeIcon icon={faMusic} />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-white font-semibold">Personalizirana Playlist</h3>
                            <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                                Prilagođen glazbeni izbor prema vašim željama i ukusu
                            </p>
                        </div>

                        <div className="p-[30px] bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                            <div className="relative hidden text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 md:block mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                                    <FontAwesomeIcon icon={faSliders} />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-white font-semibold">Profesionalna Oprema</h3>
                            <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                                Vrhunski zvučni sistem i rasvjeta za savršenu atmosferu
                            </p>
                        </div>

                        <div className="p-[30px] bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">

                            <div className="relative hidden text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 md:block mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-white font-semibold">Individualna Konzultacija</h3>
                            <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                                Detaljno planiranje glazbene podloge za sve segmente
                            </p>
                        </div>

                        <div className="p-[30px] bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                            <div className="relative hidden text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 md:block mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-white font-semibold">Fleksibilnost</h3>
                            <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                                Prilagodba atmosfere i glazbe tijekom cijelog događaja
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section className="py-24 relative overflow-hidden scroll-animate">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[150px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="container">
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Rezervirajte Svoj Termin</h2>
                    <p className="text-xl text-[#b8b8b8] mb-10">
                        Spremni ste podići svoj događaj na vrhunsku razinu? Kontaktirajte me danas i razgovarajmo o vašoj viziji.
                    </p>
                    <button>
                        <Link 
                            to="/kontakt" 
                            className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                        >
                            Pošalji Upit
                        </Link>
                    </button>
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
}
