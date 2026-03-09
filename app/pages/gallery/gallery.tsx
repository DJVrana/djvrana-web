import React, { useState, useEffect, useCallback } from 'react';
import Footer from '~/components/footer/footer';
import Navbar from '~/components/navbar/navbar';

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
  { id: 1, category: 'wedding', title: 'Luksuzno Vjenčanje Grand Hotel', description: 'Elegantna ballroom atmosfera s 200+ gostiju', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop' },
  { id: 2, category: 'club', title: 'Noćni Klub Opening Night', description: 'Energija na vrhuncu s 500+ clubbera', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop' },
  { id: 3, category: 'corporate', title: 'Tech Summit 2026', description: 'Korporativna zabava Fortune 500 kompanije', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
  { id: 4, category: 'festival', title: 'Summer Music Festival', description: 'Main stage nastup pred 3000+ ljudi', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop' },
  { id: 5, category: 'wedding', title: 'Vjenčanje na Otvorenom', description: 'Romantična atmosfera pod zvijezdama', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop' },
  { id: 6, category: 'club', title: 'VIP Club Night', description: 'Ekskluzivni party u elitnom klubu', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop' },
  { id: 7, category: 'corporate', title: 'Godišnja Korporativna Zabava', description: 'Award ceremony i after party', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop' },
  { id: 8, category: 'festival', title: 'Electronic Music Festival', description: 'Nezaboravan sunset set', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop' },
  { id: 9, category: 'wedding', title: 'Moderna Gradska Vjenčanica', description: 'Stilska ceremonija u srcu grada', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop' },
  { id: 10, category: 'club', title: 'Underground Techno Night', description: 'Industrialni vibe i čista energija', image: 'https://images.unsplash.com/photo-1571751239008-50cad6cb9265?w=800&h=600&fit=crop' },
  { id: 11, category: 'corporate', title: 'Product Launch Event', description: 'Inovativna produkcija za brend reveal', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop' },
  { id: 12, category: 'festival', title: 'Coastal Festival', description: 'Beach party s pogledom na more', image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop' }
];

const videoData: VideoItem[] = [
  { id: 1, title: 'Wedding Party Mix', embedUrl: 'https://www.youtube.com/embed/6QLlmMBR7M4' },
  { id: 2, title: 'Club Opening Set', embedUrl: 'https://www.youtube.com/embed/McuOUAMXpWc' },
  { id: 3, title: 'Festival Vibe', embedUrl: 'https://www.youtube.com/embed/4V5H3rfRwWM' },
];

const categoryLabels: Record<string, string> = {
  'wedding': 'Vjenčanje',
  'club': 'Klub',
  'corporate': 'Korporativni',
  'festival': 'Festival'
};

const filters: FilterItem[] = [
  { id: 'all', label: 'Sve' },
  { id: 'wedding', label: 'Vjenčanja' },
  { id: 'corporate', label: 'Korporativni' },
  { id: 'club', label: 'Klubovi' },
  { id: 'festival', label: 'Festivali' }
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

  return (
    <main>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <section className='gallery pt-40 relative'>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[600px] h-[600px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[-50px] left-[-100px] [animation-delay:0s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[500px] h-[500px] bg-[radial-gradient(circle,#8b7355,transparent)] bottom-[-150px] right-[-150px] [animation-delay:5s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#d4af37,transparent)] top-[50%] right-[10%] [animation-delay:10s]"></div>
          <div className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none animate-float w-[400px] h-[400px] bg-[radial-gradient(circle,#8b7355,transparent)] top-[50%] left-[0] [animation-delay:10s]"></div>
          
          <div className="min-h-screen text-white font-sans">
            <div className="container mx-auto px-4">
              
              <header>
                <div className="relative text-center pt-8 pb-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  <h1 className="text-4xl h-18 md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight">
                      Galerija Događaja
                  </h1>
                  <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                      Nezaboravne noći, profesionalna produkcija i vrhunska atmosfera - pogledajte trenutke koji su oduševili publiku
                  </p>
                </div>
              </header>

              <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
              {filters.map((filter) => (
                  <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 md:px-7 md:py-3 border text-sm md:text-base font-medium rounded-lg transition-all duration-300 uppercase tracking-wide
                      ${activeFilter === filter.id 
                      ? 'bg-[#d4af37] text-[#0a0a0a] border-[#d4af37] shadow-[0_4px_16px_rgba(212,175,55,0.4)]' 
                      : 'bg-[#1a1a1a] text-[#b8b8b8] border-[#d4af37]/20 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)]'
                      }`}
                  >
                  {filter.label}
                  </button>
              ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 md:gap-6 mb-24">
              {filteredData.map((item, index) => (
                  <div 
                  key={item.id} 
                  className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#1a1a1a] transition-transform duration-500 border border-white/5 hover:-translate-y-2 hover:scale-[1.02]"
                  onClick={() => openLightbox(index)}
                  >
                  <span className="absolute top-4 right-4 bg-[#d4af37]/95 text-[#0a0a0a] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md z-10">
                      {categoryLabels[item.category] || item.category}
                  </span>
                  <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[240px] md:h-[320px] object-cover block transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="text-xl font-semibold mb-2 text-[#d4af37]">{item.title}</h3>
                      <p className="text-sm text-[#b8b8b8] leading-relaxed">{item.description}</p>
                  </div>
                  </div>
              ))}
              </div>

              <section id="video" className="mb-20 scroll-mt-[120px]">
                <header className="relative text-center pt-8 pb-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent tracking-tight">
                    Video Atmosfera
                  </h2>
                  <p className="text-lg md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed">
                    Osjetite energiju s mojih najboljih nastupa uživo
                  </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoData.map((video) => (
                    <div 
                      key={video.id} 
                      className="group relative rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)]"
                    >
                      <div className="relative w-full aspect-[9/16]">
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          className="absolute top-0 left-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full px-4 pb-4 pt-10 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                        <h3 className="text-lg font-semibold text-[#d4af37] truncate drop-shadow-md">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-2xl p-8 md:p-12 my-16 border border-[#d4af37]/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">500+</h2>
                  <p className="text-sm md:text-base text-[#b8b8b8] uppercase tracking-widest">Događaja</p>
                  </div>
                  <div className="flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">10K+</h2>
                  <p className="text-sm md:text-base text-[#b8b8b8] uppercase tracking-widest">Sretnih Gostiju</p>
                  </div>
                  <div className="flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">15+</h2>
                  <p className="text-sm md:text-base text-[#b8b8b8] uppercase tracking-widest">Godina Iskustva</p>
                  </div>
                  <div className="flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">98%</h2>
                  <p className="text-sm md:text-base text-[#b8b8b8] uppercase tracking-widest">Zadovoljstvo</p>
                  </div>
              </div>
              </div>

            </div>

          {lightboxOpen && (
              <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-xl"
              onClick={(e) => {
                  if (e.target === e.currentTarget) closeLightbox();
              }}
              >
              <div className="relative max-w-[1200px] w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                  
                  <button 
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 md:-top-12 md:-right-8 bg-[#d4af37] text-[#0a0a0a] w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#e6c04e] hover:rotate-90 transition-all duration-300 z-50"
                  >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>

                  <button 
                  onClick={() => navigateLightbox(-1)}
                  className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-[#d4af37]/90 text-[#0a0a0a] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 backdrop-blur-md z-50"
                  >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>

                  <img 
                  src={filteredData[currentIndex]?.image} 
                  alt={filteredData[currentIndex]?.title}
                  className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.8)] border-2 border-[#d4af37]/30 select-none"
                  />

                  <button 
                  onClick={() => navigateLightbox(1)}
                  className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-[#d4af37]/90 text-[#0a0a0a] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:scale-110 transition-all duration-300 backdrop-blur-md z-50"
                  >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>

                  <div className="absolute -bottom-20 left-0 right-0 text-center px-4">
                  <h3 className="text-xl md:text-2xl mb-1 text-[#d4af37] font-semibold">
                      {filteredData[currentIndex]?.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#b8b8b8]">
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
