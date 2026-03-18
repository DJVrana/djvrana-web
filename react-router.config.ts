import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false` 
  basename: "/djvrana-web",
  ssr: false,
  // prerender: true, 
  async prerender() {
    return [
      "/",
      "/o-meni",
      "/usluge",
      "/galerija",
      "/kontakt",
      "/vjencanja",
      "/korporativni-dogadaji",
      "/privatne-proslave",
      "/dj-edukacija",
      "/najam-opreme",
      "/politika-privatnosti",
      "/uvjeti-koristenja",
    ];
  },
} satisfies Config;
