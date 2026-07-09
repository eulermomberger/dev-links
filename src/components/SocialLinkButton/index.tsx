import Link from 'next/link'

import { SocialLink } from '@/types/social-links'
import { SOCIAL_LINK_ICONS } from '@/utils/social-links'

type SocialLinkButtonProps = {
  socialLink: SocialLink
}

export function SocialLinkButton ({ socialLink }: SocialLinkButtonProps) {
  const Icon = SOCIAL_LINK_ICONS[socialLink.type];

  return (
    <Link
      href={socialLink.href}
      className="
        relative flex h-10 w-10 items-center justify-center
        before:absolute before:inset-0 before:rounded-full
        before:bg-highlight before:scale-0
        before:transition-transform before:duration-300
        hover:before:scale-140
      "
    >
      <Icon
        size={24}
      />
    </Link>
  )
}
