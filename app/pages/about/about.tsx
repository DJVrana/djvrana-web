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
import myApproachImg from '../../assets/images/service01.webp'
import djVranaLogo from '../../assets/images/dj-vrana-logo.png'
import about01 from '../../assets/images/about01.webp'
import about02 from '../../assets/images/about02.webp'
import about03 from '../../assets/images/about03.webp'
import type { Route } from './+types/about';

import * as m from '~/paraglide/messages.js';
import { LocalizedLink } from '~/utils/localizedLink/localizedLink';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
    return getMultilingualMeta(
    "o-meni", 
    m.about_meta_title(), 
    m.about_meta_desc(),
    m.about_meta_keywords()
    );
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

    const currentLang = getLocale();

  const currentAboutUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/o-meni/' 
    : 'https://djvrana.com/o-meni/';

  const jobTitleTranslated = currentLang === 'en' 
    ? 'Professional DJ' 
    : 'Profesionalni DJ';

  const knowsAboutTranslated = currentLang === 'en'
    ? ["DJing", "Wedding Entertainment", "Event Management", "Sound Engineering"]
    : ["DJ-iranje", "Zabava za vjenčanja", "Organizacija događaja", "Oblikovanje zvuka"];

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${currentAboutUrl}#ivanvranesa`,
    "name": "Ivan Vraneša",
    "alternateName": "DJ Vrana",
    "jobTitle": jobTitleTranslated,
    "description": m.about_meta_desc(),
    "url": currentAboutUrl,
    "image": "https://djvrana.com/ivan-vranesa-profil.png",
    "knowsAbout": knowsAboutTranslated,
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
                      {m.about_header_title()}
                    </h1>
                    <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                        {m.about_header_desc()}
                    </p>
                </div>
            </header>
            <div className="hero-content-aobut">
                <div className="profile-image-container">
                    <div className="profile-image">
                    <img 
                        src={djVranaLogo}
                        alt={m.about_img_alt_logo()}
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
                <p className="section-subtitle">{m.about_story_subtitle()}</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    {m.about_story_title()}
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                    {m.about_story_desc()}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                    ref={el => void (storyRefs.current[0] = el)}
                    className="flex flex-col justify-between bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 -translate-x-12 group"
                >
                    <div>
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faMusic} className='text-[24px]' />
                        </div>
                            <h3 className="text-xl font-bold mb-4">{m.about_card_1_title()}</h3>
                            <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                                {m.about_card_1_desc()}
                            </p>
                            <div className="rounded-xl overflow-hidden h-48">
                                <img 
                                src={about01}
                                alt={m.about_card_1_img_alt()} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                <div 
                    ref={(el) => void (storyRefs.current[1] = el)}
                    className="flex flex-col justify-between bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-y-8 group delay-100"
                >
                    <div>
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faHeadphones} className='text-[24px]' />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{m.about_card_2_title()}</h3>
                        <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                            {m.about_card_2_desc()}
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden h-48">
                        <img 
                        src={about02}
                        alt={m.about_card_2_img_alt()} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div 
                    ref={el => void (storyRefs.current[2] = el)}
                    className="flex flex-col justify-between bg-[#111] border border-[#d4af37]/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-700 opacity-0 translate-x-12 group delay-200"
                >
                    <div>
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faZap} className='text-[24px]' />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{m.about_card_3_title()}</h3>
                        <p className="text-[#808080] mb-6 text-sm leading-relaxed">
                            {m.about_card_3_desc()}
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden h-48">
                        <img 
                        src={about03}
                        alt={m.about_card_3_img_alt()} 
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
                { num: m.about_stat_1_num(), label: m.about_stat_1_label() },
                { num: m.about_stat_2_num(), label: m.about_stat_2_label() },
                { num: m.about_stat_3_num(), label: m.about_stat_3_label() },
                { num: m.about_stat_4_num(), label: m.about_stat_4_label() }
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
                <p className="section-subtitle">{m.about_philosophy_subtitle()}</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                {m.about_philosophy_title()}
                </h2>
            </header>

            <div className='container'>
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/5 border border-[#d4af37]/20">
                        <img 
                        src={myApproachImg} 
                        alt={m.about_philosophy_img_alt()} 
                        className="w-full h-auto"
                        />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-[#d4af37]">{m.about_philosophy_text_title()}</h3>
                    <p className="text-[#b8b8b8] leading-relaxed">
                        {m.about_philosophy_text_1()}
                    </p>
                    <p className="text-[#b8b8b8] leading-relaxed">
                        {m.about_philosophy_text_2()}
                    </p>
                    </div>
                </div>

                <blockquote className="text-2xl md:text-3xl font-light italic text-center mb-16 px-8 py-12 border-l-4 border-r-4 border-[#d4af37] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent">
                    {m.about_philosophy_quote()}
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
                <p className="section-subtitle">{m.about_spec_subtitle()}</p>

                <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    {m.about_spec_title()}
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                    {m.about_spec_desc()}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                { icon: <FontAwesomeIcon icon={faDiamond} className="w-8 h-8" />, path: "/dj-za-vjencanja/", title: m.about_spec_1_title(), desc: m.about_spec_1_desc() },
                { icon: <FontAwesomeIcon icon={faChampagneGlasses} className="w-8 h-8" />, path: "/dj-za-proslave/", title: m.about_spec_2_title(), desc: m.about_spec_2_desc() },
                { icon: <FontAwesomeIcon icon={faMicrophone} className="w-8 h-8" />, path: "/dj-za-proslave/", title: m.about_spec_3_title(), desc: m.about_spec_3_desc() },
                { icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />, path: "/dj-za-korporativni-dogadaj/", title: m.about_spec_4_title(), desc: m.about_spec_4_desc() }
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
                        <LocalizedLink
                            to={spec.path}
                            aria-label={m.about_spec_aria_more({ title: spec.title })}
                            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] hover:text-white"
                        >
                            {m.about_spec_btn()}
                        </LocalizedLink>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{m.about_cta_title()}</h2>
                        <p className="text-xl text-[#b8b8b8] mb-10">
                            {m.about_cta_desc()}
                        </p>
                        <LocalizedLink 
                            to="/kontakt/" 
                            className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                        >
                            {m.about_cta_btn()}
                        </LocalizedLink>
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