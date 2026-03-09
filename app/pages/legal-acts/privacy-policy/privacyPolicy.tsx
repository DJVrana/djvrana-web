import { useState } from 'react';
import { Link } from 'react-router';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';

const PrivacyPolicy: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('not');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <main>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="min-h-screen pt-20 text-white font-sans">
        <div className="max-w-[900px] mx-auto px-6 py-20">
            {/* Header */}
            <header className="text-center mb-20 relative pb-10 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4 bg-gradient-to-br from-white to-[#f4e5a0] bg-clip-text text-transparent">
                Politika Privatnosti
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
                    Dobrodošli u našu Politiku privatnosti. Zaštita Vaših osobnih podataka je naš prioritet i obveza koju shvaćamo krajnje ozbiljno. Ovaj dokument detaljno objašnjava kako prikupljamo, koristimo, čuvamo i štitimo Vaše osobne podatke u skladu sa Općom uredbom o zaštiti podataka (GDPR) i svim primjenjivim hrvatskim zakonima.
                </p>
                <p>
                    Ova politika primjenjuje se na sve usluge koje pružamo, uključujući rezervacije, konzultacije, izvođenje na događajima i svu komunikaciju putem naše web stranice i drugih kanala.
                </p>
                </div>
            </section>

            {/* 2. Voditelj Obrade Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                2. Voditelj Obrade Podataka
                </h2>
                <div className="text-[#a0a0a0] mb-6 leading-relaxed space-y-2">
                    <p>Voditelj obrade osobnih podataka je Ivan Vraneša (slobodni umjetnik).</p>
                    <p>Adresa/Sjedište: Zagreb, Hrvatska</p>
                    <p>Kontakt e-mail: proslave.dj@gmail.com</p>
                    <p>Usluge se pružaju u svojstvu fizičke osobe, a ova web stranica služi isključivo za informativne upite. Za sva pitanja, zahtjeve ili nedoumice vezane uz obradu Vaših osobnih podataka, možete me kontaktirati na navedeni e-mail.</p>
                </div>
                <div className="bg-gradient-to-r from-[#1b1b1b] to-transparent border-l-4 border-[#d4af37] p-6 rounded-r-lg">
                <p className="text-[#a0a0a0] leading-relaxed">
                    <strong className="text-white font-medium">Vaša prava su moja obveza.</strong> Pravo na privatnost nije samo zakonska obveza – to je temelj povjerenja između mene i mojih klijenata.
                </p>
                </div>
            </section>

            {/* 3. Podaci Koje Prikupljamo */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                3. Podaci Koje Prikupljamo
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Kako bismo Vam pružili vrhunsku uslugu i profesionalno iskustvo, prikupljamo sljedeće kategorije osobnih podataka:
                </p>
                
                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                3.1 Podaci koje prikupljamo putem kontakt forme
                </h3>
                <ul className="space-y-2 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Ime i prezime</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">E-mail adresa</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Broj telefona</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Datum događaja</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Sadržaj Vaše poruke</li>
                </ul>

                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                3.2 Podaci koje prikupljamo naknadno (tijekom e-mail dogovora)
                </h3>
                <ul className="space-y-2 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Adresa lokacije za izvođenje usluge</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Specifični glazbeni zahtjevi</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Broj gostiju i ostali detalji potrebni isključivo ako se odlučite za našu uslugu</li>
                </ul>

                <h3 className="text-xl font-normal text-white mt-8 mb-4 border-l-2 border-[#d4af37] pl-4">
                3.3 Tehnički Podaci
                </h3>
                <ul className="space-y-2 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">IP adresa</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Tip preglednika i uređaja</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Podaci o korištenju web stranice (analitika)</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Kolačići (cookies) za poboljšanje korisničkog iskustva</li>
                </ul>
            </section>

            {/* 4. Svrha Obrade Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                4. Svrha Obrade Podataka
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Vaše osobne podatke koristimo isključivo u sljedeće svrhe:
                </p>
                <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Obrada informativnih upita:</strong> Sastavljanje i slanje neobvezujućih ponuda na temelju Vašeg upita putem kontakt forme.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Komunikacija:</strong> Odgovaranje na pitanja i dogovaranje detalja vezanih uz događaj.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pružanje usluge:</strong> Priprema i izvođenje DJ usluge prema postignutom dogovoru.</li>
                </ul>
            </section>

            {/* 5. Pravna Osnova Obrade */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                5. Pravna Osnova Obrade
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Vaše osobne podatke obrađujemo na temelju sljedećih pravnih osnova:
                </p>
                <ul className="space-y-3 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Predugovorne radnje i dogovor:</strong> Obrada je nužna kako bismo na Vaš zahtjev komunicirali o uvjetima i mogućnosti pružanja usluge.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Legitimni interes:</strong> Zaštita prava i rješavanje eventualnih prigovora.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Privola (suglasnost):</strong> Obrada podataka o Vašem ponašanju na stranici putem analitičkih kolačića (Google Analytics) vrši se isključivo ako nam za to date izričitu privolu putem skočnog prozora (cookie banner).</li>
                </ul>
            </section>

            {/* 6. Dijeljenje Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                6. Dijeljenje Podataka s Trećim Stranama
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    Vaše osobne podatke ne prodajemo, ne iznajmljujemo i ne dijelimo s trećim stranama u komercijalne svrhe. Podaci mogu biti podijeljeni samo u sljedećim situacijama:
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Sa zakonskim i državnim tijelima isključivo kada postoji stroga zakonska obveza.</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">S pružateljima IT i analitičkih usluga koji nam tehnički omogućavaju rad stranice i analizu posjeta (npr. tvrtka hosting usluga te Google Ireland Limited za uslugu Google Analytics, isključivo ako ste za nju dali privolu).</li>
                </ul>
                <p className="italic mt-4 opacity-80">
                    Svi naši partneri podliježu strogim ugovornim obvezama za zaštitu podataka i ne smiju ih koristiti u vlastite svrhe.
                </p>
                </div>
            </section>

            {/* 7. Čuvanje i Zaštita Podataka */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                7. Čuvanje i Zaštita Podataka
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    Sigurnost Vaših podataka je za nas ključna. Implementirali smo najsuvremenije tehničke i organizacijske mjere zaštite:
                </p>
                <ul className="space-y-2 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Korištenje SSL/TLS enkripcije za svu komunikaciju na web stranici</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Stroga kontrola pristupa podacima</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]">Redovito sigurnosno kopiranje i ažuriranje sustava</li>
                </ul>
                <p className="mt-6 p-4 bg-[#1b1b1b] border-l-2 border-[#d4af37] rounded-r-md">
                <strong className="text-white">Razdoblje čuvanja:</strong> Vaše osobne podatke iz informativnih upita čuvam isključivo dok traje naša komunikacija. Ako ne dođe do dogovora o usluzi, Vaši podaci iz upita brišu se u roku od 6 mjeseci. Ako se dogovor ostvari, podaci se čuvaju do izvršenja usluge i isteka roka za eventualne prigovore.
                </p>
                </div>
            </section>

            {/* 8. Vaša Prava */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                8. Vaša Prava
                </h2>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                U skladu s GDPR-om, imate sljedeća prava vezana uz Vaše osobne podatke:
                </p>
                <ul className="space-y-3 mb-6 text-[#a0a0a0]">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na pristup:</strong> Možete zatražiti potvrdu obrađuju li se Vaši podaci.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na ispravak:</strong> Možete tražiti ispravak netočnih podataka.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na brisanje ("pravo na zaborav"):</strong> Možete tražiti brisanje podataka pod određenim uvjetima.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na ograničenje obrade:</strong> U određenim situacijama možete tražiti pauziranje obrade.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na prigovor:</strong> Možete uložiti prigovor na obradu podataka.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Pravo na prigovor nadzornom tijelu:</strong> Ako smatrate da je obrada Vaših osobnih podataka u suprotnosti s Općom uredbom o zaštiti podataka (GDPR), imate pravo podnijeti prigovor Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb, web: azop.hr.</li>
                </ul>
                <p className="text-[#a0a0a0] leading-relaxed mt-4">
                Za ostvarivanje bilo kojeg od ovih prava, kontaktirajte nas putem kontakt podataka navedenih u nastavku. Odgovorit ćemo na Vaš zahtjev u roku od 30 dana.
                </p>
            </section>

            {/* 9. Kolačići */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                9. Kolačići (Cookies)
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    Naša web stranica koristi kolačiće kako bi poboljšala Vaše korisničko iskustvo i omogućila pravilno funkcioniranje stranice. Kolačići su male tekstualne datoteke koje se pohranjuju na Vašem uređaju.
                </p>
                <h3 className="text-xl font-normal text-white mt-6 mb-3 border-l-2 border-[#d4af37] pl-4">Vrste kolačića koje koristimo:</h3>
                <ul className="space-y-2 mb-6">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Neophodni kolačići:</strong> Ključni za osnovne funkcije stranice.</li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#d4af37]"><strong className="text-white font-medium">Analitički kolačići:</strong> Pomažu nam razumjeti kako posjetitelji koriste stranicu. Ovi kolačići ne postavljaju se automatski. Na Vaš uređaj učitavaju se isključivo ako im date privolu klikom na gumb 'Prihvaćam' na našoj obavijesti o kolačićima (cookie banner). Svoju privolu možete povući u bilo kojem trenutku.</li>
                </ul>
                <p>
                    Možete kontrolirati i brisati kolačiće kroz postavke Vašeg preglednika. Imajte na umu da onemogućavanje određenih kolačića može utjecati na funkcionalnost stranice.
                </p>
                </div>
            </section>

            {/* 10. Promjene */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                10. Promjene Politike Privatnosti
                </h2>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                    Zadržavamo pravo ažuriranja ove Politike privatnosti kako bismo odražavali promjene u našim praksama, tehnologiji ili zakonskim zahtjevima. O svim značajnim promjenama ćemo Vas obavijestiti putem e-maila ili obavijesti na web stranici.
                </p>
                <p>
                    Preporučujemo da povremeno pregledate ovu stranicu kako biste bili informirani o tome kako štitimo Vaše podatke.
                </p>
                </div>
            </section>

            {/* 11. Maloljetnici */}
            <section className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#333333] transition-all duration-300 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                <h2 className="text-2xl font-normal text-[#d4af37] mb-6 flex items-center gap-4 after:content-[''] after:h-px after:flex-grow after:bg-gradient-to-r after:from-[#d4af37]/30 after:to-transparent">
                11. Maloljetnici
                </h2>
                <p className="text-[#a0a0a0] leading-relaxed">
                Naše usluge nisu namijenjene osobama mlađim od 18 godina. Svjesno ne prikupljamo osobne podatke od maloljetnika. Ako saznamo da smo prikupili podatke od maloljetnika bez roditeljskog pristanka, poduzet ćemo korake za brisanje tih podataka.
                </p>
            </section>

            {/* Contact Section */}
            <div className="text-center mt-16 p-8 md:p-12 bg-[#1b1b1b] rounded-2xl border border-[#d4af37]/20">
                <h2 className="text-3xl font-light mb-4 text-white">Kontaktirajte Nas</h2>
                <p className="text-[#a0a0a0] mb-4 max-w-lg mx-auto leading-relaxed">
                Za sva pitanja, zahtjeve ili nedoumice vezane uz obradu Vaših osobnih podataka, slobodno nas kontaktirajte:
                </p>
                <Link to="mailto:proslave.dj@gmail.com" className='mb-8 text-primary block'>proslave.dj@gmail.com</Link>
                <Link 
                to="mailto:proslave.dj@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black rounded-full font-medium transition-all duration-300 hover:bg-[#b8941f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                >
                Pošaljite nam E-mail
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
