import { Profile } from "../Profile";

export function MainPage() {
  return (
    <main
      className="
        flex flex-col justify-center items-center gap-6
        p-6 
        h-screen w-screen
        bg-[url('/assets/bg-mobile-light.jpg')] md:bg-[url('/assets/bg-desktop-light.jpg')] bg-cover
      "
    >
      <Profile />
    </main>
  );
}
