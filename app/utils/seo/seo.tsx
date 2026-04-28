import { getLocale } from '~/paraglide/runtime.js';

export function getMultilingualMeta(path: string, title: string, description: string, keywords: string) {
  const domain = "https://djvrana.com";
  const currentLang = getLocale();

  const cleanPath = path.replace(/^\/|\/$/g, '');
  const pathSuffix = cleanPath ? `/${cleanPath}/` : '/';

  const urlHr = `${domain}${pathSuffix}`;
  const urlEn = `${domain}/en${pathSuffix}`;

  const currentUrl = currentLang === 'en' ? urlEn : urlHr;

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: currentUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:secure_url", content: `${domain}/dj-vrana-og-image.png` },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${domain}/dj-vrana-og-image.png` },
    
    // Alternate links
    { tagName: "link", rel: "alternate", hrefLang: "hr", href: urlHr },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: urlEn },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: urlHr }, // x-default govori Googleu da je 'hr' glavni jezik ako korisnik dolazi iz npr. Njemačke
    
    // Canonical link
    { tagName: "link", rel: "canonical", href: currentUrl }
  ];
}