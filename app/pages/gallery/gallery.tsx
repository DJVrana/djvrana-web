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
import gallery13 from '../../assets/images/gallery/gallery13.webp'
import gallery14 from '../../assets/images/gallery/gallery14.webp'
import gallery15 from '../../assets/images/gallery/gallery15.webp'
import gallery16 from '../../assets/images/gallery/gallery16.webp'

import galleryThumbnail01 from '../../assets/images/gallery-thumbnails/gallery01.webp'
import galleryThumbnail02 from '../../assets/images/gallery-thumbnails/gallery02.webp'
import galleryThumbnail03 from '../../assets/images/gallery-thumbnails/gallery03.webp'
import galleryThumbnail04 from '../../assets/images/gallery-thumbnails/gallery04.webp'
import galleryThumbnail05 from '../../assets/images/gallery-thumbnails/gallery05.webp'
import galleryThumbnail06 from '../../assets/images/gallery-thumbnails/gallery06.webp'
import galleryThumbnail07 from '../../assets/images/gallery-thumbnails/gallery07.webp'
import galleryThumbnail08 from '../../assets/images/gallery-thumbnails/gallery08.webp'
import galleryThumbnail09 from '../../assets/images/gallery-thumbnails/gallery09.webp'
import galleryThumbnail10 from '../../assets/images/gallery-thumbnails/gallery10.webp'
import galleryThumbnail11 from '../../assets/images/gallery-thumbnails/gallery11.webp'
import galleryThumbnail12 from '../../assets/images/gallery-thumbnails/gallery12.webp'
import galleryThumbnail13 from '../../assets/images/gallery-thumbnails/gallery13.webp'
import galleryThumbnail14 from '../../assets/images/gallery-thumbnails/gallery14.webp'
import galleryThumbnail15 from '../../assets/images/gallery-thumbnails/gallery15.webp'
import galleryThumbnail16 from '../../assets/images/gallery-thumbnails/gallery16.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

import * as m from '~/paraglide/messages.js';
import { getMultilingualMeta } from '~/utils/seo/seo';
import { getLocale } from '~/paraglide/runtime';

export function meta({}: Route.MetaArgs) {
  return getMultilingualMeta(
    "galerija", 
    m.gallery_meta_title(), 
    m.gallery_meta_desc(),
    m.gallery_meta_keywords()
  );
}

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  thumbnailImage: string;
}

interface FilterItem {
  id: string;
  label: string;
}

interface VideoItem {
  id: number;
  title: string;
  embedUrl: string;
  uploadDate: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>('galerija');

  const galleryData: GalleryItem[] = [
    { id: 1, category: 'club', title: m.gallery_img_1_title(), description: m.gallery_img_1_desc(), image: gallery01, thumbnailImage: galleryThumbnail01 },
    { id: 2, category: 'club', title: m.gallery_img_2_title(), description: m.gallery_img_2_desc(), image: gallery02, thumbnailImage: galleryThumbnail02 },
    { id: 3, category: 'club', title: m.gallery_img_3_title(), description: m.gallery_img_3_desc(), image: gallery03, thumbnailImage: galleryThumbnail03 },
    { id: 4, category: 'parties', title: m.gallery_img_4_title(), description: m.gallery_img_4_desc(), image: gallery04, thumbnailImage: galleryThumbnail04 },
    { id: 5, category: 'parties', title: m.gallery_img_5_title(), description: m.gallery_img_5_desc(), image: gallery05, thumbnailImage: galleryThumbnail05 },
    { id: 6, category: 'parties', title: m.gallery_img_6_title(), description: m.gallery_img_6_desc(), image: gallery06, thumbnailImage: galleryThumbnail06 },
    { id: 7, category: 'parties', title: m.gallery_img_7_title(), description: m.gallery_img_7_desc(), image: gallery07, thumbnailImage: galleryThumbnail07 },
    { id: 8, category: 'parties', title: m.gallery_img_8_title(), description: m.gallery_img_8_desc(), image: gallery08, thumbnailImage: galleryThumbnail08 },
    { id: 9, category: 'parties', title: m.gallery_img_9_title(), description: m.gallery_img_9_desc(), image: gallery09, thumbnailImage: galleryThumbnail09 },
    { id: 10, category: 'parties', title: m.gallery_img_10_title(), description: m.gallery_img_10_desc(), image: gallery10, thumbnailImage: galleryThumbnail10 },
    { id: 11, category: 'wedding', title: m.gallery_img_11_title(), description: m.gallery_img_11_desc(), image: gallery11, thumbnailImage: galleryThumbnail11 },
    { id: 12, category: 'wedding', title: m.gallery_img_12_title(), description: m.gallery_img_12_desc(), image: gallery12, thumbnailImage: galleryThumbnail12 },
    { id: 13, category: 'wedding', title: m.gallery_img_13_title(), description: m.gallery_img_13_desc(), image: gallery13, thumbnailImage: galleryThumbnail13 },
    { id: 14, category: 'wedding', title: m.gallery_img_14_title(), description: m.gallery_img_14_desc(), image: gallery14, thumbnailImage: galleryThumbnail14 },
    { id: 15, category: 'wedding', title: m.gallery_img_15_title(), description: m.gallery_img_15_desc(), image: gallery15, thumbnailImage: galleryThumbnail15 },
    { id: 16, category: 'wedding', title: m.gallery_img_16_title(), description: m.gallery_img_16_desc(), image: gallery16, thumbnailImage: galleryThumbnail16 },
  ];

  const videoData: VideoItem[] = [
    { id: 1, title: m.gallery_vid_1_title(), embedUrl: 'https://www.youtube.com/embed/6QLlmMBR7M4', uploadDate: "2026-01-19T12:00:00+01:00" },
    { id: 2, title: m.gallery_vid_2_title(), embedUrl: 'https://www.youtube.com/embed/McuOUAMXpWc', uploadDate: "2026-01-17T12:00:00+01:00" },
    { id: 3, title: m.gallery_vid_3_title(), embedUrl: 'https://www.youtube.com/embed/4V5H3rfRwWM', uploadDate: "2026-01-16T12:00:00+01:00" },
    { id: 4, title: m.gallery_vid_4_title(), embedUrl: 'https://www.youtube.com/embed/xf_R-eEJoUI', uploadDate: "2026-02-20T12:00:00+01:00" },
    { id: 5, title: m.gallery_vid_5_title(), embedUrl: 'https://www.youtube.com/embed/Y7kbiqNnuD4', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 6, title: m.gallery_vid_6_title(), embedUrl: 'https://www.youtube.com/embed/kI1O_YqYCMY', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 7, title: m.gallery_vid_7_title(), embedUrl: 'https://www.youtube.com/embed/xrMuE-NM-e8', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 8, title: m.gallery_vid_8_title(), embedUrl: 'https://www.youtube.com/embed/Y_a0muJv32k', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 9, title: m.gallery_vid_9_title(), embedUrl: 'https://www.youtube.com/embed/9_JscLl-BO0', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 10, title: m.gallery_vid_10_title(), embedUrl: 'https://www.youtube.com/embed/fd3JR7YeaAY', uploadDate: "2026-03-12T12:00:00+01:00" },
    { id: 11, title: m.gallery_vid_11_title(), embedUrl: 'https://www.youtube.com/embed/xkXCgT9mdwI', uploadDate: "2026-03-13T12:00:00+01:00" },
    { id: 12, title: m.gallery_vid_12_title(), embedUrl: 'https://www.youtube.com/embed/SF5BOd3WW3o', uploadDate: "2026-03-13T12:00:00+01:00" },
  ];

  const categoryLabels: Record<string, string> = {
    'wedding': m.gallery_cat_wedding(),
    'parties': m.gallery_cat_parties(),
    'club': m.gallery_cat_club(),
  };

  const filters: FilterItem[] = [
    { id: 'all', label: m.gallery_filter_all() },
    { id: 'wedding', label: m.gallery_filter_wedding() },
    { id: 'parties', label: m.gallery_filter_parties() },
    { id: 'club', label: m.gallery_filter_club() },
  ];

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

  const toAbsoluteUrl = (src: string) =>
  src.startsWith("http") ? src : `https://djvrana.com${src}`;

  const currentLang = getLocale();

  const currentGalleryUrl = currentLang === 'en' 
    ? 'https://djvrana.com/en/galerija/' 
    : 'https://djvrana.com/galerija/';

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": currentGalleryUrl,
    "url": currentGalleryUrl,
    "name": m.gallery_schema_name(),
    "description": m.gallery_schema_desc(),
    "hasPart": [
      ...galleryData.map((item) => ({
        "@type": "ImageObject",
        "@id": `${currentGalleryUrl}#image-${item.id}`,
        "contentUrl": toAbsoluteUrl(item.image),
        "name": item.title,
        "description": item.description
      })),
      ...videoData.map((video) => {
        const videoId = video.embedUrl.split("/").pop()?.split("?")[0];

        return {
          "@type": "VideoObject",
          "@id": `${currentGalleryUrl}#video-${video.id}`,
          "name": `DJ Vrana - ${video.title}`,
          "description": `${m.gallery_schema_video_desc()} ${video.title}`,
          "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          "embedUrl": video.embedUrl,
          "uploadDate": video.uploadDate
        };
      })
    ]
  };

  return (
    <main className="overflow-x-hidden">
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} 
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
                      {m.gallery_video_title()}
                    </h1>
                    <p className="text-base md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-4">
                      {m.gallery_video_desc()}
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
                      title={`${m.gallery_alt_video_iframe()} ${video.title}`}
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
                  {m.gallery_photo_title()}
                </h2>
                <p className="text-base md:text-xl text-[#b8b8b8] max-w-2xl mx-auto leading-relaxed px-4">
                  {m.gallery_photo_desc()}
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
                      src={item.thumbnailImage} 
                      alt={`${m.gallery_alt_gallery_img()} ${item.title}, ${categoryLabels[item.category] || item.category}`}
                      className="w-full h-[320px] object-cover block transition-transform duration-700 md:group-hover:scale-110"
                      loading="lazy"
                      height={320}
                      width={240}
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
                    aria-label={m.gallery_aria_close()}
                    className="absolute top-4 right-4 md:absolute md:top-4 md:right-8 bg-[#d4af37] text-[#0a0a0a] w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-[#e6c04e] hover:rotate-90 transition-all duration-300 z-50 shadow-lg"
                  >
                      <FontAwesomeIcon icon={faXmark} className="text-[18px] md:text-[24px]" />
                  </button>

                  <div className="relative flex items-center justify-center w-full group">
                    <button 
                      onClick={() => navigateLightbox(-1)}
                      aria-label={m.gallery_aria_prev()}
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
                      aria-label={m.gallery_aria_next()}
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