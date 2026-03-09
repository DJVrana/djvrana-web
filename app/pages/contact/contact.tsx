import React, { useState } from 'react';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';

import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

interface FormState {
  name: string;
  email: string;
  date: string;
  phone: string;
  message: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const PremiumContact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    date: '',
    phone: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState<string>('kontakt');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setShowSuccess(true);
      setFormState({ name: '', email: '', date: '', phone: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      q: "DJ ili bend - što je bolje za vjenčanje?",
      a: "Bendovi nude live atmosferu i zahtijevaju više prostora i logistike. <span class=\"text-[rgba(212,175,55,1)] font-semibold\">DJ Vrana je idealan kompromis</span> - jedini DJ u Hrvatskoj koji pjeva uživo, nudeći energiju benda uz fleksibilnost DJ-a. Zato birati kad možete imati oboje?"
    },
    {
      q: "Što znači 'DJ koji pjeva uživo'?",
      a: "DJ Vrana kombinira mikšanje glazbe s <span class=\"text-[rgba(212,175,55,1)] font-semibold\">live vokalnim nastupom</span>, stvarajući jedinstvenu atmosferu koja spaja najbolje od DJ performansa i live bendova. Interakcija s gostima i osoban doživljaj su ono što ga izdvaja."
    },
    {
      q: "Koliko unaprijed treba rezervirati DJ-a?",
      a: "Za najpopularnije datume (svibanj-rujan), preporučujemo rezervaciju <span class=\"text-[rgba(212,175,55,1)] font-semibold\">6-12 mjeseci unaprijed</span>. Za druge datume, 3-6 mjeseci je idealno kako bi osigurali dostupnost i imali dovoljno vremena za planiranje playlist-e."
    },
    {
      q: "Pokrivate li cijelu Hrvatsku?",
      a: "Apsolutno! DJ Vrana pokriva <span class=\"text-[rgba(212,175,55,1)] font-semibold\">cijelu Hrvatsku i inozemstvo</span>. Posebno smo iskusni u regiji Zagreba, Istre, Dalmacije i Slavonije. Kontaktirajte nas za detalje o vašoj lokaciji."
    },
    {
      q: "Što je Paket Plus s instrumentima?",
      a: "Paket Plus uključuje <span class=\"text-[rgba(212,175,55,1)] font-semibold\">live instrumentale</span> (saksofon, gitara ili klavijature) uz DJ nastup i vokale. To stvara još bogatiju zvučnu paletu i luksuznu atmosferu koja će vaše vjenčanje podići na višu razinu."
    }
  ];

  return (
    <main>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="min-h-screen text-gray-300 font-sans selection:bg-[rgba(212,175,55,0.3)] selection:text-[rgba(212,175,55,1)]">
        <div className="container">
        <section className='contact-form relative pt-40'>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            <header>
                <div className="relative text-center pt-8 pb-24">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-4xl h-18 md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight">
                      Upiti i Rezervacije
                    </h1>
                    <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                        Imaš viziju za savršen party, a ja imam soundtrack. Pošalji mi detalje o svom eventu, a ja ću se pobrinuti da plesni podij bude pun cijelu noć.
                    </p>
                </div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                    <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Kontakt <span className="text-[rgba(212,175,55,1)]">informacije</span>
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-[rgba(212,175,55,1)] to-transparent mt-6 rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                    <div className="flex items-center space-x-6 group">
                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Telefon</h3>
                        <p className="text-xl text-white font-light"><Link to="tel:+3850989582676" className="hover:text-[rgba(212,175,55,1)] transition-colors">+385 098 958 2676</Link></p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 group">
                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Email</h3>
                        <p className="text-xl text-white font-light"><Link to="mailto:proslave.dj@gmail.com" className="hover:text-[rgba(212,175,55,1)] transition-colors">proslave.dj@gmail.com</Link></p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 group">
                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Lokacija</h3>
                        <p className="text-xl text-white font-light">Zagreb, Hrvatska</p>
                        <p className="text-sm text-[rgba(212,175,55,0.8)] mt-1 italic">Pokrivam sve gradove u Hrvatskoj</p>
                        </div>
                    </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">Pratite me</p>
                    <div className="flex space-x-4">
                        <Link to="https://www.instagram.com/ivan.vranesa/" target='blank' aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
                        </Link>
                        <Link to="#https://www.tiktok.com/@dj.proslave" target='blank' aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faTiktok} className="text-[18px]" />
                        </Link>
                        <Link to="https://www.youtube.com/@IvanVrane%C5%A1a" target='blank' aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faYoutube} className="text-[18px]" />
                        </Link>
                        <Link to="#" target='blank' aria-label="SoundCloud" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faSoundcloud} className="text-[18px]" />
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(212,175,55,0.2)] to-[rgba(212,175,55,0.2)] rounded-2xl blur-xl opacity-50 pointer-events-none"></div>
                    
                    <div className="relative bg-[#111] border border-white/5 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Pošaljite Upit</h2>
                        <p className="text-gray-400 font-light">Ispunite formu i javit ću vam se u najkraćem roku</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Ime i Prezime <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="Vaše ime i prezime" 
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email Adresa <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="vas@email.com" 
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Datum Događaja</label>
                            <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={formState.date}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300 [color-scheme:dark]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Broj Telefona</label>
                            <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formState.phone}
                            onChange={handleInputChange}
                            placeholder="099 123 4567" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Vaša Poruka <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <textarea 
                            id="message" 
                            name="message" 
                            value={formState.message}
                            onChange={handleInputChange}
                            placeholder="Postavite pitanje, opišite svoje želje, lokaciju, broj gostiju..." 
                            required 
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300 resize-none"
                            ></textarea>
                        </div>
                        </div>

                        <button 
                        type="submit" 
                        className="btn btn-primary w-full"
                        >
                        Pošaljite Upit
                        </button>

                        {showSuccess && (
                        <div className="mt-4 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center space-x-3 text-green-400 animate-pulse">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="text-sm">Hvala! Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro.</p>
                        </div>
                        )}
                    </form>
                    </div>
                </div>
                </div>
            </section>

            <section id="cesta-pitanja" className='faq pb-40 scroll-mt-[120px]'>
                <div className="mt-32 max-w-4xl mx-auto relative">
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-150px] left-[-200px] [animation-delay:0s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
                    <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
                    <header className="mx-auto max-w-2xl text-center mb-20">
                        <p className="section-subtitle">Potražite odgovor</p>

                        <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                            Česta pitanja
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                            Ovdje su odgovori na najčešća pitanja. Ako ne pronađeš ono što tražiš, slobodno nam se obrati putem kontakt forme.
                        </p>
                    </header> 

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(212,175,55,0.3)]"
                        >
                            <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none group"
                            aria-expanded={activeFaq === index}
                            >
                            <h3 className={`text-lg font-medium transition-colors duration-300 ${activeFaq === index ? 'text-[rgba(212,175,55,1)]' : 'text-white group-hover:text-[rgba(212,175,55,1)]'}`}>
                                {faq.q}
                            </h3>
                            <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'border-[rgba(212,175,55,1)] bg-[rgba(212,175,55,0-1)] text-[rgba(212,175,55,1)] rotate-180' : 'border-white/10 text-gray-500 group-hover:border-[rgba(212,175,55,0.3)]'}`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            </button>
                            
                            <div 
                            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                            <div className="pt-2 border-t border-white/5 text-gray-400 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
        </div>
        <Footer />
    </main>
  );
};

export default PremiumContact;
