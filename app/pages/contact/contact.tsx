import React, { useEffect, useState, useMemo } from 'react';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';
import emailjs from '@emailjs/browser';

import { faInstagram, faTiktok, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import type { Route } from './+types/contact';

import * as m from '~/paraglide/messages.js';
import { getLocale } from '~/paraglide/runtime.js';
import { getMultilingualMeta } from '~/utils/seo/seo';

export function meta({ location }: Route.MetaArgs) {
  return getMultilingualMeta(
    "kontakt", 
    m.contact_meta_title(), 
    m.contact_meta_desc(),
    m.contact_meta_keywords()
  );
}

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
  const [showError, setShowError] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState<string>('kontakt');

  const today = useMemo(() => formatLocalDate(), []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY!), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.phone && formState.message) {
      const formatDateHR = (dateStr: string): string => {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        return `${day}.${month}.${year}.`;
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID!, 
          import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
          {
            name: formState.name,
            email: formState.email,
            date: formatDateHR(formState.date),
            phone: formState.phone,
            message: formState.message
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY!
        );

        setShowSuccess(true);
        setFormState({ name: '', email: '', date: '', phone: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);

      } catch (err) {
        setShowError(true);
        setShowSuccess(false);
        setTimeout(() => setShowError(false), 5000);
      }
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  function formatLocalDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const faqs: FaqItem[] = [
    { q: m.contact_faq_1_q(), a: m.contact_faq_1_a() },
    { q: m.contact_faq_2_q(), a: m.contact_faq_2_a() },
    { q: m.contact_faq_3_q(), a: m.contact_faq_3_a() },
    { q: m.contact_faq_4_q(), a: m.contact_faq_4_a() },
    { q: m.contact_faq_5_q(), a: m.contact_faq_5_a() },
    { q: m.contact_faq_6_q(), a: m.contact_faq_6_a() },
    { q: m.contact_faq_7_q(), a: m.contact_faq_7_a() }
  ];

  const currentLang = getLocale();

  const currentContactUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/kontakt/' 
    : 'https://djvrana.com/kontakt/';

  const areaServedTranslated = currentLang === 'en' ? 'Croatia' : 'Hrvatska';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a.replace(/<[^>]*>?/gm, '')
      }
    }))
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": currentContactUrl,
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": `${currentContactUrl}#localbusiness`,
      "name": "DJ Vrana",
      "image": "https://djvrana.com/dj-vrana-og-image.png",
      "telephone": "+3850989582676",
      "email": "proslave.dj@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zagreb",
        "addressCountry": "HR"
      },
      "areaServed": areaServedTranslated,
      "url": currentContactUrl
    }
  };

  return (
    <main className="overflow-x-hidden">
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} 
        />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        
        <div className="min-h-screen text-gray-300 font-sans selection:bg-[rgba(212,175,55,0.3)] selection:text-[rgba(212,175,55,1)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className='contact-form relative pt-28 md:pt-40'>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-50px] md:left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-50px] md:right-[-150px] [animation-delay:5s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
            
            <header>
                <div className="relative text-center pt-8 pb-12 md:pb-24">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight leading-tight">
                      {m.contact_header_title()}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed mt-4">
                      {m.contact_header_subtitle()}
                    </p>
                </div>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="space-y-10 md:space-y-12">
                    <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                        {m.contact_info_title()} <span className="text-[rgba(212,175,55,1)]">{m.contact_info_highlight()}</span>
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[rgba(212,175,55,1)] to-transparent mt-6 rounded-full"></div>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center space-x-4 md:space-x-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">{m.contact_phone()}</h3>
                        <p className="text-lg md:text-xl text-white font-light"><Link to="tel:+3850989582676" className="hover:text-[rgba(212,175,55,1)] transition-colors">+385 098 958 2676</Link></p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        </div>
                        <div className="truncate">
                        <h3 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">{m.contact_email()}</h3>
                        <p className="text-lg md:text-xl text-white font-light truncate"><Link to="mailto:proslave.dj@gmail.com" className="hover:text-[rgba(212,175,55,1)] transition-colors">proslave.dj@gmail.com</Link></p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[rgba(212,175,55,1)] group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 shadow-lg shadow-black">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">{m.contact_location_title()}</h3>
                        <p className="text-lg md:text-xl text-white font-light">{m.contact_location()}</p>
                        <p className="text-xs md:text-sm text-[rgba(212,175,55,0.8)] mt-1 italic">{m.contact_location_desc()}</p>
                        </div>
                    </div>
                    </div>

                    <div className="pt-6 md:pt-8 border-t border-white/10">
                    <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 md:mb-6">{m.contact_follow_me()}</p>
                    <div className="flex space-x-3 md:space-x-4">
                        <Link to="https://www.instagram.com/ivan.vranesa/" target='blank' aria-label="Instagram" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faInstagram} className="text-[18px] md:text-[20px]" />
                        </Link>
                        <Link to="https://www.tiktok.com/@dj.proslave" target='blank' aria-label="TikTok" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faTiktok} className="text-[16px] md:text-[18px]" />
                        </Link>
                        <Link to="https://www.youtube.com/@IvanVrane%C5%A1a" target='blank' aria-label="YouTube" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faYoutube} className="text-[16px] md:text-[18px]" />
                        </Link>
                        <Link to="https://soundcloud.com/djvrana" target='blank' aria-label="SoundCloud" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-[#d4af37]/5 transition-all duration-300 hover:text-[rgba(212,175,55,1)] hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.1)] hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                            <FontAwesomeIcon icon={faSoundcloud} className="text-[16px] md:text-[18px]" />
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(212,175,55,0.2)] to-[rgba(212,175,55,0.2)] rounded-2xl blur-xl opacity-50 pointer-events-none"></div>
                    
                    <div className="relative bg-[#111] border border-white/5 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
                    <div className="mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{m.contact_form_title()}</h2>
                        <p className="text-sm md:text-base text-gray-400 font-light">{m.contact_form_desc()}</p>
                    </div>

                    <form onSubmit={handleSubmit} id="kontakt-forma" className="scroll-mt-[220px] md:scroll-mt-[280px] space-y-5 md:space-y-6" aria-label={m.contact_form_title()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.contact_form_label_name()} <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder={m.contact_form_placeholder_name()} 
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.contact_form_label_email()} <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder={m.contact_form_placeholder_email()} 
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.contact_form_label_date()}</label>
                            <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            lang={getLocale()}
                            min={today}
                            value={formState.date}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300 [color-scheme:dark]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.contact_form_label_phone()} <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formState.phone}
                            onChange={handleInputChange}
                            placeholder={m.contact_form_placeholder_phone()} 
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.contact_form_label_message()} <span className="text-[rgba(212,175,55,1)]">*</span></label>
                            <textarea 
                            id="message" 
                            name="message" 
                            value={formState.message}
                            onChange={handleInputChange}
                            placeholder={m.contact_form_placeholder_message()} 
                            required 
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,1)] focus:ring-1 focus:ring-[rgba(212,175,55,1)] transition-all duration-300 resize-none"
                            ></textarea>
                        </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-full py-3 mt-2 font-semibold tracking-wide text-sm md:text-base"
                            >
                            {m.contact_form_btn_submit()}
                        </button>

                        {showSuccess && (
                        <div className="mt-4 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center space-x-3 text-green-400 animate-pulse">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="text-sm">{m.contact_form_success_msg()}</p>
                        </div>
                        )}

                        {showError && (
                        <div className="mt-4 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center space-x-3 text-red-400 animate-pulse">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-sm">{m.contact_form_error_msg()}</p>
                        </div>
                        )}
                    </form>
                    </div>
                </div>
            </div>
        </section>

        <section id="cesta-pitanja" className='faq pb-20 md:pb-40 scroll-mt-[100px] md:scroll-mt-[120px]'>
            <div className="mt-20 md:mt-32 max-w-4xl mx-auto relative">
                <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-150px] left-[-200px] [animation-delay:0s]"></div>
                
                <header className="mx-auto max-w-2xl text-center mb-12 md:mb-20">
                    <p className="section-subtitle text-sm md:text-base">{m.contact_faq_subtitle()}</p>

                    <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
                      {m.contact_faq_title()}
                    </h2>

                    <p className="mx-auto mt-4 md:mt-5 max-w-xl text-pretty text-sm md:text-base leading-relaxed text-white/70">
                      {m.contact_faq_desc()}
                    </p>
                </header> 

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(212,175,55,0.3)]"
                    >
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full px-5 py-4 md:px-6 md:py-5 flex justify-between items-center text-left focus:outline-none group"
                            aria-expanded={activeFaq === index}
                        >
                            <h3 className={`text-base md:text-lg font-medium pr-4 transition-colors duration-300 ${activeFaq === index ? 'text-[rgba(212,175,55,1)]' : 'text-white group-hover:text-[rgba(212,175,55,1)]'}`}>
                                {faq.q}
                            </h3>
                            <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'border-[rgba(212,175,55,1)] bg-[rgba(212,175,55,0.1)] text-[rgba(212,175,55,1)] rotate-180' : 'border-white/10 text-gray-500 group-hover:border-[rgba(212,175,55,0.3)]'}`}>
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        
                        <div 
                        className={`px-5 md:px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                        <div className="pt-2 border-t border-white/5 text-sm md:text-base text-gray-400 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
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