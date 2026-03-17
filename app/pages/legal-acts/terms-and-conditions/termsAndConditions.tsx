import { useState } from 'react';
import { Link } from 'react-router';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';
import type { Route } from './+types/termsAndConditions';

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com"; // Zamijenite vašom domenom
  const title = "Uvjeti Korištenja | DJ Vrana";
  const description = "Pročitajte pravila i uvjete korištenja web stranice DJ Vrane. Informacije o rezervacijama, autorskim pravima i ograničenjima odgovornosti.";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" }, // Opet, bitno je da Google ovo indeksira
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${domain}/uvjeti-koristenja` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${domain}/dj-vrana-og-image.png` },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${domain}/dj-vrana-og-image.png` },
    
    // Canonical link
    { tagName: "link", rel: "canonical", href: `${domain}/uvjeti-koristenja` }
  ];
}

const TermsOfUse: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('uvjeti-koristenja');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Uvjeti Korištenja - DJ Vrana",
    "description": "Pravila i uvjeti korištenja usluga i web stranice DJ Vrane.",
    "url": "https://djvrana.com/uvjeti-koristenja",
    "publisher": {
      "@type": "Person",
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
          
          {/* Header */}
          <header className="text-center mb-20 relative pb-10 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4 bg-gradient-to-br from-white to-[#f4e5a0] bg-clip-text text-transparent">
              Uvjeti Korištenja
            </h1>
            <p className="text-[#a0a0a0] text-lg md:text-xl tracking-wider uppercase">
              Premium DJ Usluge
            </p>
          </header>

          {/* Posljednje ažurirano */}
          <div className="text-center mb-12">
            <div className="inline-block border border-[#d4af37]/30 bg-[#1b1b1b] px-6 py-2 rounded-full text-sm text-[#d4af37] tracking-wide">
              Posljednje ažurirano: 07. ožujka 2026.
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Uvod */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                1. Uvod
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Dobrodošli na web stranicu <strong className="text-white font-medium">DJ Vrana</strong> (u daljnjem tekstu: “Stranica”). Korištenjem Stranice potvrđujete da ste pročitali, razumjeli i prihvaćate ove Uvjeti korištenja.
                </p>
                <p>
                  Ako se ne slažete s ovim Uvjetima korištenja, molimo vas da ne koristite Stranicu i ne šaljete upite putem kontakt forme.
                </p>
              </div>
            </section>

            {/* 2. Informativna svrha stranice */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                2. Informativna svrha stranice
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Stranica je prezentacijskog (informativnog) karaktera i služi isključivo za prikaz DJ usluge, dostupnosti te omogućavanje slanja upita/rezervacije termina putem kontakt forme.
                </p>
                <p>
                  Naručivanje i plaćanje usluge ne odvija se putem Stranice. Svaki eventualni dogovor o pružanju usluge (uključujući cijenu, uvjete i obveze) provodi se naknadno putem e-mail komunikacije.
                </p>
              </div>
            </section>

            {/* 3. Pružatelj usluge i kontakt */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                3. Pružatelj usluge i kontakt
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  DJ uslugu pruža Ivan Vraneša (slobodni umjetnik) kao fizička osoba.
                </p>
                <p>
                  Kontakt e-mail:{' '}
                  <Link to="mailto:proslave.dj@gmail.com" className="text-[#d4af37] hover:underline transition-colors duration-300">
                    proslave.dj@gmail.com
                  </Link>
                </p>
              </div>
            </section>

            {/* 4. Rezervacije i upiti */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                4. Rezervacije i upiti (neobvezujuće)
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Slanje upita ili rezervacije putem kontakt forme ne predstavlja obvezu korisnika da mora ugovoriti uslugu, niti predstavlja automatsko prihvaćanje usluge s naše strane.
                </p>
                <p>
                  Ponuda se, ako je primjenjivo, dostavlja putem e-maila te može sadržavati rok važenja, cijenu, uvjete te dodatne informacije. Usluga se smatra dogovorenom tek nakon izričite potvrde dogovora između strana putem e-maila (ili drugog dogovorenog kanala).
                </p>
              </div>
            </section>

            {/* 5. Točnost podataka koje unosite */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                5. Točnost podataka koje unosite
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Korisnik je odgovoran za točnost i potpunost podataka koje unese u kontakt formu (npr. ime i prezime, e-mail, datum događaja, broj telefona, poruka).
                </p>
                <p>
                  Ne odgovaramo za štetu ili propuštenu komunikaciju nastalu zbog netočno unesenih podataka (npr. pogrešna e-mail adresa).
                </p>
              </div>
            </section>

            {/* 6. Pravila ponašanja korisnika */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                6. Pravila ponašanja korisnika
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Zabranjeno je:
              </p>
              <ul className="space-y-3 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Slati nezakonit, uvredljiv, prijeteći ili obmanjujući sadržaj putem kontakt forme.
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Pokušavati ometati rad Stranice, servera ili sigurnosnih mehanizama (npr. skripte, spam, pokušaji neovlaštenog pristupa).
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Koristiti Stranicu na način koji može štetiti ugledu pružatelja usluge ili trećih osoba.
                </li>
              </ul>
              
              <div className="bg-gradient-to-r from-[#1b1b1b] to-transparent border-l-4 border-[#d4af37] p-6 rounded-r-lg mt-6">
                <p className="text-[#a0a0a0] leading-relaxed">
                  U slučaju zlouporabe, <strong className="text-white font-medium">zadržavamo pravo ignorirati upite</strong>, blokirati komunikaciju te poduzeti odgovarajuće korake radi zaštite.
                </p>
              </div>
            </section>

            {/* 7. Intelektualno vlasništvo */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                7. Intelektualno vlasništvo
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Sav sadržaj na Stranici (tekstovi, fotografije, logo, dizajn, video materijali, glazbeni isječci ako postoje) zaštićen je autorskim pravima i/ili drugim pravima intelektualnog vlasništva, osim ako je izričito naznačeno drugačije.
                </p>
                <p>
                  Bez prethodnog pisanog odobrenja nije dopušteno kopiranje, distribucija, javno prikazivanje ili prerada sadržaja Stranice u komercijalne svrhe.
                </p>
              </div>
            </section>

            {/* 8. Vanjske poveznice i usluge trećih strana */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                8. Vanjske poveznice i usluge trećih strana
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Stranica može sadržavati poveznice na web stranice trećih strana (npr. društvene mreže) ili koristiti usluge trećih strana (npr. analitičke alate uz privolu).
                </p>
                <p>
                  Ne odgovaramo za sadržaj, pravila privatnosti ili postupanje trećih strana. Korištenje takvih poveznica/usluga radite na vlastitu odgovornost.
                </p>
              </div>
            </section>

            {/* 9. Dostupnost stranice i promjene */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                9. Dostupnost stranice i promjene
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Trudimo se osigurati kontinuiranu dostupnost Stranice, ali ne jamčimo da će Stranica uvijek raditi bez prekida ili pogrešaka (npr. zbog održavanja, kvara, nadogradnji, hosting problema).
                </p>
                <p>
                  Zadržavamo pravo u bilo kojem trenutku izmijeniti, privremeno onemogućiti ili trajno ukloniti dio ili cijelu Stranicu bez prethodne najave.
                </p>
              </div>
            </section>

            {/* 10. Ograničenje odgovornosti */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                10. Ograničenje odgovornosti
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Informacije na Stranici pružaju se “kakve jesu” i služe općem informiranju. Ne jamčimo da su sve informacije u svakom trenutku potpune ili ažurne (npr. dostupnost termina).
              </p>
              <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                U najvećoj mjeri dopuštenoj zakonom, ne odgovaramo za:
              </p>
              <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Izravnu ili neizravnu štetu nastalu korištenjem Stranice ili nemogućnošću korištenja Stranice.
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Gubitak podataka ili poslovne štete.
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">
                  Postupanje trećih strana (npr. vanjske poveznice).
                </li>
              </ul>
            </section>

            {/* 11. Privatnost i kolačići */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                11. Privatnost i kolačići
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Obrada osobnih podataka (npr. podaci iz kontakt forme) te uporaba kolačića i analitike (npr. Google Analytics uz privolu) uređeni su zasebnim dokumentom: Politikom privatnosti.
                </p>
                <p>
                  Preporučujemo da prije korištenja kontakt forme pročitate <Link to="/politika-privatnosti" className="text-[#d4af37] hover:underline">Politiku privatnosti</Link>.
                </p>
              </div>
            </section>

            {/* 12. Mjerodavno pravo i rješavanje sporova */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                12. Mjerodavno pravo i rješavanje sporova
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Na ove Uvjete korištenja primjenjuje se pravo Republike Hrvatske.
                </p>
                <p>
                  U slučaju spora, strane će nastojati spor riješiti mirnim putem. Ako mirno rješenje nije moguće, nadležan je stvarno nadležni sud prema mjestu pružatelja usluge, osim ako obvezni propisi ne određuju drugačije.
                </p>
              </div>
            </section>

            {/* 13. Promjene uvjeta korištenja */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
              <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                13. Promjene uvjeta korištenja
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Zadržavamo pravo izmijeniti ove Uvjete korištenja kako bismo ih uskladili s promjenama u poslovanju, funkcionalnostima Stranice ili zakonskim propisima.
                </p>
                <p>
                  Ažurirana verzija bit će objavljena na Stranici te stupa na snagu danom objave.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 p-8 md:p-12 bg-[#1b1b1b] rounded-2xl border border-[#d4af37]/20">
            <h2 className="text-3xl font-light mb-4 text-white">Kontaktirajte Nas</h2>
            <p className="text-[#a0a0a0] mb-4 max-w-lg mx-auto leading-relaxed">
              Ako imate pitanja vezana uz ove Uvjete korištenja, kontaktirajte nas:
            </p>
            <Link to="mailto:proslave.dj@gmail.com" className="mb-8 text-[#d4af37] block text-lg transition-colors hover:text-white">
              proslave.dj@gmail.com
            </Link>
            <Link 
              to="mailto:proslave.dj@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black rounded-full font-medium transition-all duration-300 hover:bg-[#b8941f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
            >
              Pošaljite nam E-mail
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfUse;
