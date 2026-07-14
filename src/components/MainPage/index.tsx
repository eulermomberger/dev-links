import { PrismicProfileData } from "@/types/prismic";
import { normalizePrismicLinks } from "@/utils/links";
import { normalizePrismicSocialLinks } from "@/utils/social-links";

import { Links } from "../Links";
import { Profile } from "../Profile";
import { SocialLinks } from "../SocialLinks";
import { Footer } from "../Footer";
import { ThemeModeSwitch } from "../ThemeModeSwitch";

type MainPageProps = {
  profile: PrismicProfileData;
};

export function MainPage({ profile }: MainPageProps) {
  

  return (
    <main
      className="
        flex flex-col justify-center items-center gap-6
        h-full w-full
      "
    >
      <Profile
        avatarUrl={profile.avatar.url}
        username={profile.username}
      />

      <ThemeModeSwitch/>

      <Links links={normalizePrismicLinks(profile.links)} />

      <SocialLinks socialLinks={normalizePrismicSocialLinks(profile.social_links)} />

      <Footer/>
    </main>
  );
}
