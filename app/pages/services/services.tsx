import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRing, 
  faBuilding, 
  faChampagneGlasses, 
  faCampground,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '~/components/navbar/navbar';
import Footer from '~/components/footer/footer';
import { Link } from 'react-router';

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

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="text-white min-h-screen font-sans">
        
        <div className="container relative z-10">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <header className='pt-40'>
                <div className="relative text-center pt-8 pb-24">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-4xl pt-2 h-18 md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight">
                        Što Nudim
                    </h1>
                    <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                        Specijalizirane DJ usluge prilagođene vašim potrebama, s vrhunskom opremom i bogatim iskustvom
                    </p>
                </div>
            </header>

            <section className="flex flex-col lg:flex-row items-center gap-12 mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Premium Wedding
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Vjenčanja</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                Stvorite savršenu atmosferu za najvažniji dan vašeg života s personaliziranom glazbenom selekcijom koja će oduševiti vas i vaše goste. Profesionalni pristup od ceremonije do posljednjeg plesa.
                </p>
                <ul className="space-y-4 pt-4 text-gray-300">
                {['Personalizirani playlist prema vašim željama', 'Profesionalno ceremonijalno ozvučenje', 'Atmosfera za prvi ples i zabavu', 'Koordinacija s ostalim izvođačima', 'Vrhunska audio i lighting oprema'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1.5" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <button>
                    <Link to="/vjencanja" className="btn btn-primary">
                        Saznaj Više
                    </Link>
                </button>
            </div>
            <div className="flex-1 relative w-full">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faRing} />
                </div>
                <img 
                alt="Wedding DJ Service" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1618107095181-e3ba0f53ee59?w=800&h=600&fit=crop"
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Corporate Events
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Korporativni Eventi</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                Profesionalan i diskretan pristup za poslovne događaje, konferencije i korporativne proslave. Stvaramo atmosferu koja odražava profesionalnost vašeg brenda uz vrhunsku tehnološku podršku.
                </p>
                <ul className="space-y-4 pt-4 text-gray-300">
                {['Diskretna i profesionalna izvedba', 'Prilagođena glazba za poslovnu atmosferu', 'Tehnička podrška za prezentacije', 'Fleksibilnost i prilagodba programu', 'Iskustvo s VIP eventima'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1.5" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <button>
                    <Link to="/korporativni-eventi" className="btn btn-primary">
                    Potraži Informacije
                    </Link>
                </button>
            </div>
            <div className="flex-1 relative w-full">
                <div className="absolute -top-6 -right-6 lg:-right-6 lg:left-auto -left-6 w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faBuilding} />
                </div>
                <img 
                alt="Corporate Events DJ" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center gap-12 mb-32 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Private Parties
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Privatne Proslave</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                Nezaboravne rođendanske zabave, obljetnice i posebne privatne prilike. Prilagođavamo se vašim željama i stvaramo jedinstvenu atmosferu koja će oduševiti sve generacije.
                </p>
                <ul className="space-y-4 pt-4 text-gray-300">
                {['Personalizirani glazbeni pristup', 'Prilagodba za sve dobne skupine', 'Interaktivna zabava i angažman gostiju', 'Fleksibilni paketi i trajanje', 'Profesionalna rasvjeta i efekti'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1.5" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <button>
                    <Link to="/privatne-proslave" className="btn btn-primary">
                    Detaljnije
                    </Link>
                </button>
            </div>
            <div className="flex-1 relative w-full">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faChampagneGlasses} />
                </div>
                <img 
                alt="Private Party DJ" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
                />
            </div>
            </section>

            <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex-1 space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                Clubs & Festivals
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Klubovi & Festivali</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                Energična i dinamična izvedba za klubove, festivale i velika glazbena događanja. Dugogodišnje iskustvo u čitanju publike i stvaranju nezaboravne atmosfere na najzahtjevnijim eventima.
                </p>
                <ul className="space-y-4 pt-4 text-gray-300">
                {['Iskustvo s velikim eventima', 'Raznoliki glazbeni žanrovi i stilovi', 'Čitanje publike i energija', 'Profesionalna DJ oprema i backup', 'Dugogodišnje iskustvo u industriji'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheck} className="text-[#d4af37] mt-1.5" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
                <button>
                    <Link to="/klubovi-i-festivali" className="btn btn-primary">
                    Više Informacija
                    </Link>
                </button>
            </div>
            <div className="flex-1 relative w-full">
                <div className="absolute -top-6 -right-6 lg:-right-6 lg:left-auto -left-6 w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center text-3xl text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 z-10">
                <FontAwesomeIcon icon={faCampground} />
                </div>
                <img 
                alt="Club & Festival DJ" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
                />
            </div>
            </section>

        </div>

        <section className="bg-[#121212] py-24 text-center border-t border-[#d4af37]/10">
            <div className="container reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <h2 className="text-4xl font-bold mb-6 text-white">Spremni za Nezaboravan Event?</h2>
            <p className="text-xl text-gray-400 mb-10">
                Kontaktirajte me danas i razgovarajmo o vašim potrebama. Zajedno ćemo stvoriti savršeno glazbeno iskustvo.
            </p>
            <button>
                <Link to="/kontakt" className="btn btn-primary">
                    Kontaktiraj Me
                </Link>
            </button>
            </div>
        </section>
        </div>
        <Footer />
    </main>
  );
};

export default PremiumDJUsluge;
