import { useState } from 'react';
import { Link } from 'react-router';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';
import type { Route } from './+types/termsAndConditions';

import * as m from '~/paraglide/messages.js';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { LocalizedLink } from '~/utils/localizedLink/localizedLink';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "uvjeti-koristenja", 
    m.tac_meta_title(), 
    m.tac_meta_desc(),
    m.tac_meta_keywords()
  );
}

const TermsOfUse: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('uvjeti-koristenja');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

const currentLang = getLocale(); 

  const currentTermsUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/uvjeti-koristenja/' 
    : 'https://djvrana.com/uvjeti-koristenja/';

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentTermsUrl}#webpage`,
    "name": m.tac_schema_name(),
    "description": m.tac_schema_desc(),
    "url": currentTermsUrl,
    "publisher": {
      "@type": "Person",
      "@id": `${currentTermsUrl}/o-meni/#ivanvranesa`, 
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
              {m.tac_title()}
            </h1>
            <p className="text-[#a0a0a0] text-lg md:text-xl tracking-wider uppercase">
              {m.tac_subtitle()}
            </p>
          </header>

          {/* Posljednje ažurirano */}
          <div className="text-center mb-12">
            <div className="inline-block border border-[#d4af37]/30 bg-[#1b1b1b] px-6 py-2 rounded-full text-sm text-[#d4af37] tracking-wide">
              {m.tac_last_updated()}
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Uvod */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec1_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec1_p1_start()}
                  <strong className="text-white font-medium">DJ Vrana</strong>
                  {m.tac_sec1_p1_end()}
                </p>
                <p>
                  {m.tac_sec1_p2()}
                </p>
              </div>
            </section>

            {/* 2. Informativna svrha stranice */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec2_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec2_p1()}
                </p>
                <p>
                  {m.tac_sec2_p2()}
                </p>
              </div>
            </section>

            {/* 3. Pružatelj usluge i kontakt */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec3_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec3_p1()}
                </p>
                <p>
                  {m.tac_sec3_p2()}
                  <Link to="mailto:proslave.dj@gmail.com" className="text-[#d4af37] hover:underline transition-colors duration-300">
                    proslave.dj@gmail.com
                  </Link>
                </p>
              </div>
            </section>

            {/* 4. Rezervacije i upiti */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec4_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec4_p1()}
                </p>
                <p>
                  {m.tac_sec4_p2()}
                </p>
              </div>
            </section>

            {/* 5. Točnost podataka koje unosite */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec5_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec5_p1()}
                </p>
                <p>
                  {m.tac_sec5_p2()}
                </p>
              </div>
            </section>

            {/* 6. Pravila ponašanja korisnika */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec6_title()}
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.tac_sec6_p1()}
              </p>
              <ul className="space-y-3 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec6_li1()}
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec6_li2()}
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec6_li3()}
                </li>
              </ul>
              
              <div className="bg-gradient-to-r from-[#1b1b1b] to-transparent border-l-4 border-[#d4af37] p-6 rounded-r-lg mt-6">
                <p className="text-[#a0a0a0] leading-relaxed">
                  {m.tac_sec6_warn_start()}
                  <strong className="text-white font-medium">{m.tac_sec6_warn_bold()}</strong>
                  {m.tac_sec6_warn_end()}
                </p>
              </div>
            </section>

            {/* 7. Intelektualno vlasništvo */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec7_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec7_p1()}
                </p>
                <p>
                  {m.tac_sec7_p2()}
                </p>
              </div>
            </section>

            {/* 8. Vanjske poveznice i usluge trećih strana */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec8_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec8_p1()}
                </p>
                <p>
                  {m.tac_sec8_p2()}
                </p>
              </div>
            </section>

            {/* 9. Dostupnost stranice i promjene */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec9_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec9_p1()}
                </p>
                <p>
                  {m.tac_sec9_p2()}
                </p>
              </div>
            </section>

            {/* 10. Ograničenje odgovornosti */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec10_title()}
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {m.tac_sec10_p1()}
              </p>
              <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                {m.tac_sec10_p2()}
              </p>
              <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec10_li1()}
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec10_li2()}
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  {m.tac_sec10_li3()}
                </li>
              </ul>
            </section>

            {/* 11. Privatnost i kolačići */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec11_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec11_p1()}
                </p>
                <p>
                  {m.tac_sec11_p2_start()}
                  <LocalizedLink to="/politika-privatnosti/" className="text-[#d4af37] hover:underline">
                    {m.tac_sec11_p2_link()}
                  </LocalizedLink>
                  {m.tac_sec11_p2_end()}
                </p>
              </div>
            </section>

            {/* 12. Mjerodavno pravo i rješavanje sporova */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec12_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec12_p1()}
                </p>
                <p>
                  {m.tac_sec12_p2()}
                </p>
              </div>
            </section>

            {/* 13. Promjene uvjeta korištenja */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                {m.tac_sec13_title()}
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  {m.tac_sec13_p1()}
                </p>
                <p>
                  {m.tac_sec13_p2()}
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 p-8 md:p-12 bg-[#1b1b1b] rounded-2xl border border-[#d4af37]/20">
            <h2 className="text-3xl font-light mb-4 text-white">{m.tac_contact_title()}</h2>
            <p className="text-[#a0a0a0] mb-4 max-w-lg mx-auto leading-relaxed">
              {m.tac_contact_desc()}
            </p>
            <Link to="mailto:proslave.dj@gmail.com" className="mb-8 text-[#d4af37] block text-lg transition-colors hover:text-white">
              proslave.dj@gmail.com
            </Link>
            <Link 
              to="mailto:proslave.dj@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black rounded-full font-medium transition-all duration-300 hover:bg-[#b8941f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
            >
              {m.tac_contact_btn()}
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfUse;