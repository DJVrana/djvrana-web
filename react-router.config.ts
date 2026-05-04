import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, 
  
  async prerender() {
    const baseRoutes = [
      "/",
      "/o-meni",
      "/usluge",
      "/galerija",
      "/kontakt",
      "/dj-za-korporativni-dogadaj",
      "/dj-za-proslave",
      "/dj-za-vjencanja",
      "/dj-edukacija",
      "/najam-opreme",
      "/politika-privatnosti",
      "/uvjeti-koristenja"
    ];

    const paths: string[] = [];

    baseRoutes.forEach((route) => {
      paths.push(route); 
      
      if (route === "/") {
        paths.push("/en/");
      } else {
        paths.push(`/en${route}`);
      }
    });

    return paths;
  },
} satisfies Config;