import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  ...prefix(":locale?", [
    index("pages/home/home.tsx"),
    route("o-meni", "pages/about/about.tsx"),
    route("usluge", "pages/services/services.tsx"),
    route("galerija", "pages/gallery/gallery.tsx"),
    route("kontakt", "pages/contact/contact.tsx"),
    route("dj-za-korporativni-dogadaj", "pages/services/corporate-events/corporateEvents.tsx"),
    route("dj-za-proslave", "pages/services/private-parties/privateParties.tsx"),
    route("dj-za-vjencanja", "pages/services/weddings/weddings.tsx"),
    route("dj-edukacija", "pages/services/dj-education/djEducation.tsx"),
    route("najam-opreme", "pages/services/equipment-rental/equipmentRental.tsx"),
    route("politika-privatnosti", "pages/legal-acts/privacy-policy/privacyPolicy.tsx"),
    route("uvjeti-koristenja", "pages/legal-acts/terms-and-conditions/termsAndConditions.tsx"),
  ]),
] satisfies RouteConfig;