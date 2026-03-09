import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/home.tsx"),
  route("/o-meni", "pages/about/about.tsx"),
  route("/usluge", "pages/services/services.tsx"),
  route("/galerija", "pages/gallery/gallery.tsx"),
  route("/kontakt", "pages/contact/contact.tsx"),
  route("/klubovi-i-festivali", "pages/services/clubs-and-festivals/clubsAndFestivals.tsx"),
  route("/korporativni-eventi", "pages/services/corporate-events/corporateEvents.tsx"),
  route("/privatne-proslave", "pages/services/private-parties/privateParties.tsx"),
  route("/vjencanja", "pages/services/weddings/weddings.tsx"),
  route("/pravila-privatnosti", "pages/legal-acts/privacy-policy/privacyPolicy.tsx"),
  route("/uvjeti-koristenja", "pages/legal-acts/terms-and-conditions/termsAndConditions.tsx"),
] satisfies RouteConfig;