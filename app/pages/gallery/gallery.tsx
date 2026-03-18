import React, { useState, useEffect, useCallback } from 'react';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';
import type { Route } from './+types/gallery';

import gallery01 from '../../assets/images/gallery/gallery01.webp'
import gallery02 from '../../assets/images/gallery/gallery02.webp'
import gallery03 from '../../assets/images/gallery/gallery03.webp'
import gallery04 from '../../assets/images/gallery/gallery04.webp'
import gallery05 from '../../assets/images/gallery/gallery05.webp'
import gallery06 from '../../assets/images/gallery/gallery06.webp'
import gallery07 from '../../assets/images/gallery/gallery07.webp'
import gallery08 from '../../assets/images/gallery/gallery08.webp'
import gallery09 from '../../assets/images/gallery/gallery09.webp'
import gallery10 from '../../assets/images/gallery/gallery10.webp'
import gallery11 from '../../assets/images/gallery/gallery11.webp'
import gallery12 from '../../assets/images/gallery/gallery12.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

export function meta({}: Route.MetaArgs) {
  const domain = "https://djvrana.com";
  const title = "Galerija slika i videa | DJ Vrana - Atmosfera s nastupa";
  const description = "Pogledajte galeriju fotografija i videozapise s vjenčanja, korporativnih proslava i klupskih nastupa. Uvjerite se u vrhunsku atmosferu koju stvara DJ Vrana.";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "DJ Vrana galerija, video DJ za vjenčanja, slike s vjenčanja DJ, klupski nastupi, DJ atmosfera" },
    { name: "robots", content: "index, follow" },
    
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${domain}/galerija` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { property: "og:image", content: `${domain}/dj-vrana-og-image-square.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image-square.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "1200" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${domain}/dj-vrana-og-image.png` },
    
    { tagName: "link", rel: "canonical", href: `${domain}/galerija` }
  ];
}

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface FilterItem {
  id: string;
  label: string;
}

interface VideoItem {
  id: number;
  title: string;
  embedUrl: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, category: 'wedding', title: 'Luksuzno Vjenčanje Grand Hotel', description: 'Elegantna ballroom atmosfera s 200+ gostiju', image: gallery01 },
  { id: 2, category: 'club', title: 'Noćni Klub Opening Night', description: 'Energija na vrhuncu s 500+ clubbera', image: gallery02 },
  { id: 3, category: 'parties', title: 'Tech Summit 2026', description: 'Korporativna zabava Fortune 500 kompanije', image: gallery03 },
  { id: 4, category: 'club', title: 'Summer Music Festival', description: 'Main stage nastup pred 3000+ ljudi', image: gallery04 },
  { id: 5, category: 'wedding', title: 'Vjenčanje na Otvorenom', description: 'Romantična atmosfera pod zvijezdama', image: gallery05 },
  { id: 6, category: 'club', title: 'VIP Club Night', description: 'Ekskluzivni party u elitnom klubu', image: gallery06 },
  { id: 7, category: 'parties', title: 'Godišnja Korporativna Zabava', description: 'Award ceremony i after party', image: gallery07 },
  { id: 8, category: 'club', title: 'Electronic Music Festival', description: 'Nezaboravan sunset set', image: gallery08 },
  { id: 9, category: 'wedding', title: 'Moderna Gradska Vjenčanica', description: 'Stilska ceremonija u srcu grada', image: gallery09 },
  { id: 10, category: 'club', title: 'Underground Techno Night', description: 'Industrialni vibe i čista energija', image: gallery10 },
  { id: 11, category: 'parties', title: 'Product Launch Event', description: 'Inovativna produkcija za brend reveal', image: gallery11 },
  { id: 12, category: 'club', title: 'Coastal Festival', description: 'Beach party s pogledom na more', image: gallery12 }
];

const videoData: VideoItem[] = [
  { id: 1, title: 'I love It x Samba de Janeiro 🕺', embedUrl: 'https://www.youtube.com/embed/6QLlmMBR7M4' },
  { id: 2, title: 'Ne Zovi Mama Doktora x Linđo 💃', embedUrl: 'https://www.youtube.com/embed/McuOUAMXpWc' },
  { id: 3, title: 'Forza x Najbolje od Svega 🕺', embedUrl: 'https://www.youtube.com/embed/4V5H3rfRwWM' },
  { id: 4, title: 'DJ Vrana Promo Video', embedUrl: 'https://www.youtube.com/embed/xf_R-eEJoUI' },
  { id: 5, title: '2025 recap', embedUrl: 'https://www.youtube.com/embed/Y7kbiqNnuD4' },
  { id: 6, title: 'Maturalna Zabava Westin', embedUrl: 'https://www.youtube.com/embed/kI1O_YqYCMY' },
  { id: 7, title: 'Vjenčanje - Wedding Corberon', embedUrl: 'https://www.youtube.com/embed/xrMuE-NM-e8' },
  { id: 8, title: 'Maturalna Večer - Hotel Sheraton', embedUrl: 'https://www.youtube.com/embed/Y_a0muJv32k' },
  { id: 9, title: 'Birthday Party - Gin Garden', embedUrl: 'https://www.youtube.com/embed/9_JscLl-BO0' },
  { id: 10, title: '20th Birthday - Kvatric', embedUrl: 'https://www.youtube.com/embed/fd3JR7YeaAY' },
  { id: 11, title: 'DJ na rođendanu', embedUrl: 'https://www.youtube.com/embed/xkXCgT9mdwI' },
  { id: 12, title: 'Pivnica Budweiser - Nova Godina', embedUrl: 'https://www.youtube.com/embed/SF5BOd3WW3o' },
];

const categoryLabels: Record<string, string> = {
  'wedding': 'Vjenčanje',
  'parties': 'Proslava',
  'club': 'Klub',
};

const filters: FilterItem[] = [
  { id: 'all', label: 'Sve' },
  { id: 'wedding', label: 'Vjenčanja' },
  { id: 'parties', label: 'Proslave' },
  { id: 'club', label: 'Klubovi' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>('galerija');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const filteredData: GalleryItem[] = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      let next = prev + direction;
      if (next < 0) return filteredData.length - 1;
      if (next >= filteredData.length) return 0;
      return next;
    });
  }, [filteredData.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videoData.map((video, index) => {
      const videoId = video.embedUrl.split('/').pop(); 
      
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "VideoObject",
          "name": `DJ Vrana - ${video.title}`,
          "description": `Atmosfera s nastupa DJ Vrane: ${video.title}`,
          "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/hqdefault.webp`,
          "embedUrl": video.embedUrl,
          "uploadDate": "2024-01-01"
        }
      };
    })
  };

  return (
    <main className="overflow-x-hidden">
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} 
        />
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        <section className="relative pt-24 md:pt-40 mb-16 md:mb-30 px-4 md:px-0">
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
        
          <div className='container mx-auto'>
            <header>
                  <div className="relative text-center pt-8 pb-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight leading-tight">
                      Video Atmosfera
                    </h1>
                    <p className="text-base md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-4">
                      Pogledajte energiju i atmosferu s mojih brojnih nastupa!
                    </p>
                  </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {videoData.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 shadow-sm hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)]"
                >
                  <div className="relative w-full aspect-[9/16]">
                    <iframe
                      src={video.embedUrl}
                      title={`DJ Vrana nastup - ${video.title}`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full px-4 pb-4 pt-10 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <h3 className="text-base md:text-lg font-semibold text-[#d4af37] truncate drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='photo' className='gallery relative mb-16 md:mb-20 scroll-mt-[120px] px-4 md:px-0'>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
          
          <div className="text-white font-sans">
            <div className="container mx-auto">

              <header className="relative text-center pt-8 pb-8 md:pb-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight leading-tight">
                  Galerija Događaja
                </h2>
                <p className="text-base md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-4">
                  Nezaboravne noći, vrhunska atmosfera – pogledajte trenutke koje smo zajedno stvorili i doživite energiju svakog događaja.
                </p>
              </header>

              <div className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-12 flex-wrap px-2">
              {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 md:px-7 md:py-3 border text-xs md:text-base font-medium rounded-lg transition-all duration-300 uppercase tracking-wide flex-grow-0
                        ${activeFilter === filter.id 
                        ? 'bg-[#d4af37] text-[#0a0a0a] border-[#d4af37] shadow-[0_4px_16px_rgba(212,175,55,0.4)]' 
                        : 'bg-[#1a1a1a] text-[#b8b8b8] border-[#d4af37]/20 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-0.5'
                        }`}
                  >
                    {filter.label}
                  </button>
              ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
              {filteredData.map((item, index) => (
                  <div 
                  key={item.id} 
                  className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#1a1a1a] transition-transform duration-500 border border-white/5 md:hover:-translate-y-2 md:hover:scale-[1.02]"
                  onClick={() => openLightbox(index)}
                  >
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#d4af37]/95 text-[#0a0a0a] px-3 py-1 md:px-3.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider backdrop-blur-md z-10 shadow-lg">
                      {categoryLabels[item.category] || item.category}
                  </span>
                  <img 
                      src={item.image} 
                      alt={`DJ Vrana na nastupu - ${item.title}, ${categoryLabels[item.category] || item.category}`}
                      className="w-full h-[240px] md:h-[320px] object-cover block transition-transform duration-700 md:group-hover:scale-110"
                      loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 md:p-6 translate-y-0 md:translate-y-full transition-transform duration-500 md:group-hover:translate-y-0">
                      <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#d4af37]">{item.title}</h3>
                      <p className="text-xs md:text-sm text-[#b8b8b8] leading-relaxed line-clamp-2 md:line-clamp-none">{item.description}</p>
                  </div>
                  </div>
              ))}
              </div>

            </div>

          {lightboxOpen && (
              <div 
              className="fixed inset-0 bg-black/98 z-[9999] flex items-center justify-center p-2 md:p-6 backdrop-blur-xl"
              onClick={(e) => {
                  if (e.target === e.currentTarget) closeLightbox();
              }}
              >
              <div className="relative max-w-[1200px] w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                  
                  <button 
                    onClick={closeLightbox}
                    aria-label="Zatvori galeriju"
                    className="fixed top-4 right-4 md:absolute md:-top-12 md:right-8 bg-[#d4af37] text-[#0a0a0a] w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-[#e6c04e] hover:rotate-90 transition-all duration-300 z-50 shadow-lg"
                  >
                      <FontAwesomeIcon icon={faXmark} className="text-[20px] md:text-[24px]" />
                  </button>

                  <div className="relative flex items-center justify-center w-full group">
                    <button 
                      onClick={() => navigateLightbox(-1)}
                      aria-label="Prethodna slika"
                      className="absolute left-2 md:left-16 bg-[#d4af37]/90 text-[#0a0a0a] w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center md:hover:bg-[#d4af37] md:hover:scale-110 transition-all duration-300 backdrop-blur-md z-50 shadow-lg"
                    >
                      <FontAwesomeIcon icon={faAngleLeft} className="text-[16px] md:text-[24px]" />
                    </button>

                    <img 
                      src={filteredData[currentIndex]?.image} 
                      alt={filteredData[currentIndex]?.title}
                      className="max-w-full max-h-[60vh] md:max-h-[85vh] rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.8)] border md:border-2 border-[#d4af37]/30 select-none object-contain"
                    />

                    <button 
                      onClick={() => navigateLightbox(1)}
                      aria-label="Sljedeća slika"
                      className="absolute right-2 md:right-16 bg-[#d4af37]/90 text-[#0a0a0a] w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center md:hover:bg-[#d4af37] md:hover:scale-110 transition-all duration-300 backdrop-blur-md z-50 shadow-lg"
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="text-[16px] md:text-[24px]" />
                    </button>
                  </div>

                  <div className="relative mt-4 md:mt-6 text-center px-4 max-w-2xl">
                    <h3 className="text-lg md:text-2xl mb-1 text-[#d4af37] font-semibold">
                        {filteredData[currentIndex]?.title}
                    </h3>
                    <p className="text-xs md:text-base text-[#b8b8b8]">
                        {filteredData[currentIndex]?.description}
                    </p>
                  </div>
              </div>
              </div>
          )}
          </div>
        </section>
        <Footer />
    </main>
  );
}
