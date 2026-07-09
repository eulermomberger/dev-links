import { SocialLink } from "@/types/social-links";

import { SocialLinkButton } from "../SocialLinkButton";

type SocialLinksProps = {
  socialLinks: SocialLink[];
};

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <section className="flex justify-center items-center gap-4 w-full my-6">
      {socialLinks.map((socialLink, index) => (
        <SocialLinkButton
          key={`${index}-${socialLink.href}`}
          socialLink={socialLink}
        />
      ))}
    </section>
  );
}
