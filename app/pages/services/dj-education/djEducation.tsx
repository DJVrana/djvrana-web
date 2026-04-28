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
  faBolt,
  faHeadphones,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import type { Route } from './+types/djEducation';

import djEducationImg from '../../../assets/images/dj-education.webp';

import service from '../../../assets/videos/dj-education.mp4';
import servicePoster from '../../../assets/images/dj-education-poster.webp';

import * as m from '~/paraglide/messages.js';
import { LocalizedLink } from '~/utils/localizedLink/localizedLink';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "dj-edukacija", 
    m.dj_education_meta_title(), 
    m.dj_education_meta_desc(),
    m.dj_education_meta_keywords()
  )
}

export default function DJEdukacija() {
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

const currentLang = getLocale();

  const currentCourseUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/dj-edukacija/' 
    : 'https://djvrana.com/dj-edukacija/';

  const currentAboutUrl = currentLang === 'en'
    ? 'https://djvrana.com/en/o-meni/'
    : 'https://djvrana.com/o-meni/';

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${currentCourseUrl}#course`,
    "name": m.dj_education_schema_name(),
    "description": m.dj_education_schema_desc(),
    "url": currentCourseUrl,
    "provider": {
      "@type": "Person",
      "@id": `${currentAboutUrl}#ivanvranesa`,
      "name": m.dj_education_schema_provider(),
      "url": currentAboutUrl
    },
    "coursePrerequisites": m.dj_education_schema_prereq(),
    "educationalCredentialAwarded": m.dj_education_schema_credential(),
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "location": m.dj_education_schema_location()
    }
  };

  return (
    <main>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} 
      />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="min-h-screen text-white font-sans overflow-x-hidden">
        
        <section className="text-center mb-16 relative dj-education-hero-bg-img py-30 md:py-40 px-4">
          <div className="hero-badge">{m.dj_education_hero_badge()}</div>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold bg-gradient-to-br from-[#d4af37] via-[#f4e5a0] to-[#d4af37] bg-clip-text text-transparent mb-5 tracking-tight">
            {m.dj_education_hero_title()}
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-[700px] mx-auto leading-[1.8]">
            {m.dj_education_hero_desc()}
          </p>
        </section>

        <section className='dj-education px-4 md:px-0'>
          <div className='container mx-auto'>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center mb-20">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>

              <div className="relative lg:max-w-none w-full order-2 md:order-1">
                <div className="relative p-1 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <video
                      className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={servicePoster}
                      aria-label={m.dj_education_video_aria()}
                    >
                      <source src={service} type="video/mp4" />
                      <track kind='captions' src="" srcLang='hr' label={m.dj_education_video_track()}></track>
                      {m.dj_education_video_fallback()}
                    </video>
                  </div>
                </div>
              </div>

              <div className="py-5 order-1 md:order-2">
                <span className="inline-block px-4 mb-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.dj_education_intro_badge()}
                </span>
                <h2 className="text-[1.5rem] md:text-[2rem] mb-6 text-white font-semibold">
                  {m.dj_education_intro_title()}
                </h2>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  {m.dj_education_intro_text_1()}
                </p>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  {m.dj_education_intro_text_2()}
                </p>
              </div>
            </div>

            <div className="scroll-animate relative bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-[rgba(10,10,10,0.8)] border border-[#d4af37]/10 rounded-[20px] p-6 sm:p-10 md:p-[60px_40px] mt-10">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <header>
                <p className="section-subtitle text-center">{m.dj_education_features_subtitle()}</p>
                <h2 className="text-[1.5rem] md:text-[1.75rem] mb-10 text-center text-white font-semibold">
                  {m.dj_education_features_title()}
                </h2>
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[20px] md:gap-[30px]">
                
                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faHeadphones} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_1_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_1_desc()}
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faSliders} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_2_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_2_desc()}
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faMusic} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_3_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_3_desc()}
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faBolt} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_4_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_4_desc()}
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_5_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_5_desc()}
                  </p>
                </div>

                <div className="p-6 md:p-[30px] hover:bg-[#111111] border border-[#d4af37]/15 rounded-2xl transition-all duration-300 ease hover:-translate-y-[5px] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <div className="relative block text-[#d4af37] h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <FontAwesomeIcon icon={faComments} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{m.dj_education_feature_6_title()}</h3>
                  <p className="text-[0.95rem] text-[#a0a0a0] leading-[1.6]">
                    {m.dj_education_feature_6_desc()}
                  </p>
                </div>

              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center mt-20 mb-10">
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
              <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>

              <div className="relative lg:max-w-none w-full order-2 md:order-2">
                <div className="relative p-1 bg-gradient-to-br from-[#d4af37] to-[#8b7355] rounded-[20px] animate-frame-glow">
                  <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden relative">
                    <img 
                      src={djEducationImg}
                      alt={m.dj_education_details_img_alt()} 
                      loading="lazy"
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="py-5 order-1 md:order-1">
                <span className="inline-block px-4 mb-4 py-1.5 border border-[#d4af37] text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase bg-[#d4af37]/5">
                  {m.dj_education_details_badge()}
                </span>
                <h3 className="text-[1.5rem] md:text-[2rem] mb-6 text-white font-semibold">
                  {m.dj_education_details_title()}
                </h3>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  {m.dj_education_details_text_1()}
                </p>
                <p className="text-[1.125rem] text-[#a0a0a0] mb-5 leading-[1.8]">
                  {m.dj_education_details_text_2()}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-0 relative overflow-hidden">
          <div className="scroll-animate">
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[150px] left-[-100px] [animation-delay:0s]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
            
            <div className="container mx-auto">
              <div className='max-w-3xl mx-auto text-center'>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{m.dj_education_cta_title()}</h2>
                <p className="text-lg md:text-xl text-[#b8b8b8] mb-10">
                  {m.dj_education_cta_desc()}
                </p>
                <LocalizedLink 
                  to="/kontakt/"
                  aria-label={m.dj_education_cta_aria()}
                  className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-10"
                >
                  {m.dj_education_cta_btn()}
                </LocalizedLink>
                
                <div className='mx-auto rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[10px] w-full max-w-[595px] overflow-hidden'>
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
}