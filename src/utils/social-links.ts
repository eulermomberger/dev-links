import type { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";

import { AvailableSocialLinks, SocialLink } from "@/types/social-links";
import { PrismicSocialLink } from "@/types/prismic";

export const normalizePrismicSocialLinks = (links: PrismicSocialLink[]): SocialLink[] => (
  links.map((link) => ({
    type: link.network,
    href: link.url.url,
  }))
);

export const SOCIAL_LINK_ICONS: Record<AvailableSocialLinks, IconType> = {
  [AvailableSocialLinks.X]: IoLogoTwitter,
  [AvailableSocialLinks.TWITCH]: IoLogoTwitch,
  [AvailableSocialLinks.GITHUB]: IoLogoGithub,
  [AvailableSocialLinks.FACEBOOK]: IoLogoFacebook,
  [AvailableSocialLinks.INSTAGRAM]: IoLogoInstagram,
  [AvailableSocialLinks.YOUTUBE]: IoLogoYoutube,
  [AvailableSocialLinks.LINKEDIN]: IoLogoLinkedin,
  [AvailableSocialLinks.WHATSAPP]: IoLogoWhatsapp,
  [AvailableSocialLinks.TIKTOK]: IoLogoTiktok,
};