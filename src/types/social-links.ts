export enum AvailableSocialLinks {
  X = 'x',
  TWITCH = 'twitch',
  GITHUB = 'github',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  WHATSAPP = 'whatsapp',
  TIKTOK = 'tiktok',
}

export type SocialLink = {
  type: AvailableSocialLinks;
  href: string;
};
