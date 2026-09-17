import { HEADER_LINKS } from "../Header/consts";

export const FOOTER_LINK_GROUPS = [
  { label: "Explore", links: HEADER_LINKS },
  {
    label: "Our drinks",
    links: [
      { label: "Cold Juices", href: "/products" },
      { label: "Detox Drinks", href: "/products" },
      { label: "Smoothies", href: "/products" },
      { label: "Wellness Packs", href: "/products" },
    ],
  },
  {
    label: "Follow along",
    links: [
      { label: "Instagram", href: "https://www.instagram.com" },
      { label: "Twitter", href: "https://www.twitter.com" },
      { label: "Facebook", href: "https://www.facebook.com" },
    ],
  },
] as const;
