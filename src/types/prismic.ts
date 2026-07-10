import { AvailableSocialLinks } from "./social-links";

export type PrismicProfileData = {
  avatar: PrismicAvatar;
  username: string;
  links: PrismicLink[];
  social_links: PrismicSocialLink[];
};

type PrismicAvatar = {
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
  alt: string | null;
  copyright: string | null;
};

type PrismicUrl = {
  link_type: string;
  key: string;
  url: string;
};

export type PrismicLink = {
  label: string;
  url: PrismicUrl;
};

export type PrismicSocialLink = {
  network: AvailableSocialLinks;
  url: PrismicUrl;
};
