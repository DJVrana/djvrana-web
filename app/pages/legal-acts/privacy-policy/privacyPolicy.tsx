import { useState } from 'react';
import { Link } from 'react-router';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';
import type { Route } from './+types/privacyPolicy';

import * as m from '~/paraglide/messages.js';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
    return getMultilingualMeta(
        "politika-privatnosti", 
        m.pp_meta_title(), 
        m.pp_meta_desc(),
        m.pp_meta_keywords()
    );
}

const PrivacyPolicy: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('politika-privatnosti');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

const currentLang = getLocale();

  const currentPrivacyUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/politika-privatnosti/' 
    : 'https://djvrana.com/politika-privatnosti/';

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentPrivacyUrl}#webpage`,
    "name": m.pp_schema_name(),
    "description": m.pp_schema_desc(),
    "url": currentPrivacyUrl,
    "publisher": {
      "@type": "Person",
      "@id": `${currentPrivacyUrl}o-meni/#ivanvranesa`,
      "name": "Ivan Vraneša"
    }
  };

  return (
    <main>
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} 
        />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="min-h-screen pt-20 text-white font-sans">
        <div className="max-w-[900px] mx-auto px-6 py-20">
            <header className="text-center mb-20 relative pb-10 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent">
            <h1 className="text-4xl pb-1 md:text-5xl font-light tracking-widest mb-4 bg-gradient-to-br from-white to-[#f4e5a0] bg-clip-text text-transparent">
                {m.pp_title()}
            </h1>
            <p className="text-[#a0a0a0] text-lg md:text-xl tracking-wider uppercase">
                {m.pp_subtitle()}
            </p>
            </header>

            {/* Posljednje ažurirano */}
            <div className="text-center mb-12">
            <div className="inline-block border border-[#d4af37]/30 bg-[#1b1b1b] px-6 py-2 rounded-full text-sm text-[#d4af37] tracking-wide">
                {m.pp_last_updated()}
            </div>
            </div>

            <div className="space-y-8">
            {/* 1. Uvod */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec1_title()}
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    {m.pp_sec1_p1()}
                </p>
                <p>
                    {m.pp_sec1_p2()}
                </p>
                </div>
            </section>

            {/* 2. Voditelj Obrade Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec2_title()}
                </h2>
                <div className="text-[#a0a0a0] mb-6 leading-relaxed space-y-2">
                    <p>{m.pp_sec2_p1()}</p>
                    <p>{m.pp_sec2_p2()}</p>
                    <p>{m.pp_sec2_p3()}</p>
                    <p>{m.pp_sec2_p4()}</p>
                </div>
                <div className="bg-gradient-to-r from-[#1b1b1b] to-transparent border-l-4 border-[#d4af37] p-6 rounded-r-lg">
                <p className="text-[#a0a0a0] leading-relaxed">
                    <strong className="text-white font-medium">{m.pp_sec2_warn_bold()}</strong>
                    {m.pp_sec2_warn_text()}
                </p>
                </div>
            </section>

            {/* 3. Podaci Koje Prikupljamo */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec3_title()}
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.pp_sec3_desc()}
                </p>
                
                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                {m.pp_sec3_1_title()}
                </h3>
                <ul className="space-y-2 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_1_li1()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_1_li2()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_1_li3()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_1_li4()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_1_li5()}</li>
                </ul>

                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                {m.pp_sec3_2_title()}
                </h3>
                <ul className="space-y-2 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_2_li1()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_2_li2()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_2_li3()}</li>
                </ul>

                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                {m.pp_sec3_3_title()}
                </h3>
                <ul className="space-y-2 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_3_li1()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_3_li2()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_3_li3()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec3_3_li4()}</li>
                </ul>
            </section>

            {/* 4. Svrha Obrade Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec4_title()}
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.pp_sec4_desc()}
                </p>
                <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec4_li1_bold()}</strong>{m.pp_sec4_li1_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec4_li2_bold()}</strong>{m.pp_sec4_li2_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec4_li3_bold()}</strong>{m.pp_sec4_li3_text()}</li>
                </ul>
            </section>

            {/* 5. Pravna Osnova Obrade */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec5_title()}
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.pp_sec5_desc()}
                </p>
                <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec5_li1_bold()}</strong>{m.pp_sec5_li1_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec5_li2_bold()}</strong>{m.pp_sec5_li2_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec5_li3_bold()}</strong>{m.pp_sec5_li3_text()}</li>
                </ul>
            </section>

            {/* 6. Dijeljenje Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec6_title()}
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    {m.pp_sec6_desc()}
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec6_li1()}</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec6_li2()}</li>
                </ul>
                <p className="italic mt-4 opacity-80">
                    {m.pp_sec6_italic()}
                </p>
                </div>
            </section>

            {/* 7. Čuvanje i Zaštita Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec7_title()}
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    {m.pp_sec7_desc()}
                </p>
                <ul className="space-y-2 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec7_li1()}</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec7_li2()}</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">{m.pp_sec7_li3()}</li>
                </ul>
                <p className="mt-6 p-4 bg-[#1b1b1b] border-l-2 border-[#d4af37] rounded-r-md">
                <strong className="text-white">{m.pp_sec7_warn_bold()}</strong>{m.pp_sec7_warn_text()}
                </p>
                </div>
            </section>

            {/* 8. Vaša Prava */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec8_title()}
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.pp_sec8_desc()}
                </p>
                <ul className="space-y-3 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li1_bold()}</strong>{m.pp_sec8_li1_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li2_bold()}</strong>{m.pp_sec8_li2_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li3_bold()}</strong>{m.pp_sec8_li3_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li4_bold()}</strong>{m.pp_sec8_li4_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li5_bold()}</strong>{m.pp_sec8_li5_text()}</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec8_li6_bold()}</strong>{m.pp_sec8_li6_text()}</li>
                </ul>
                <p className="text-[#a0a0a0] leading-relaxed mt-4">
                {m.pp_sec8_footer()}
                </p>
            </section>

            {/* 9. Kolačići */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec9_title()}
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    {m.pp_sec9_desc()}
                </p>
                <h3 className="text-xl font-normal text-white mt-6 mb-3 border-l-2 border-[#d4af37] pl-4">{m.pp_sec9_subtitle()}</h3>
                <ul className="space-y-2 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec9_li1_bold()}</strong>{m.pp_sec9_li1_text()}</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">{m.pp_sec9_li2_bold()}</strong>{m.pp_sec9_li2_text()}</li>
                </ul>
                <p>
                    {m.pp_sec9_footer()}
                </p>
                </div>
            </section>

            {/* 10. Promjene */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.pp_sec10_title()}
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    {m.pp_sec10_p1()}
                </p>
                <p>
                    {m.pp_sec10_p2()}
                </p>
                </div>
            </section>

            {/* 11. Maloljetnici */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                    {m.pp_sec11_title()}
                </h2>
                <p className="text-[#a0a0a0] leading-relaxed">
                    {m.pp_sec11_desc()}
                </p>
            </section>

            {/* Contact Section */}
            <div className="text-center mt-16 p-8 md:p-12 bg-[#1b1b1b] rounded-2xl border border-[#d4af37]/20">
                <h2 className="text-3xl font-light mb-4 text-white">{m.pp_contact_title()}</h2>
                <p className="text-[#a0a0a0] mb-4 max-w-lg mx-auto leading-relaxed">
                    {m.pp_contact_desc()}
                </p>
                <Link to="mailto:proslave.dj@gmail.com" className='mb-8 text-primary block'>proslave.dj@gmail.com</Link>
                <Link 
                    to="mailto:proslave.dj@gmail.com" 
                    className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black rounded-full font-medium transition-all duration-300 hover:bg-[#b8941f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                >
                {m.pp_contact_btn()}
                </Link>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </main>
  );
};

export default PrivacyPolicy;