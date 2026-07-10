import { Link } from "@/types/link";
import { PrismicLink } from "@/types/prismic";

export const normalizePrismicLinks = (links: PrismicLink[]): Link[] => (
  links.map((link) => ({
    label: link.label,
    href: link.url.url,
  }))
);