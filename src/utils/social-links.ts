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

import { AvailableSocialLinks } from "@/types/social-links";

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