import { MainPage } from "@/components/MainPage";
import { client } from "@/prismicio";
import { PrismicProfileData } from "@/types/prismic";

export const revalidate = 60;

export default async function Home() {
  const profile = await client.getSingle("profile");

  return (
    <MainPage profile={profile.data as PrismicProfileData} />
  );
}
