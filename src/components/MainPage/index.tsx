import { Links } from "../Links";
import { Profile } from "../Profile";

// Estático agora, mas trocar pelo fetch do prismic depois
const links = [
  { label: "Inscreva-se no NLW", href: "https://www.rocketseat.com.br" },
  { label: "Baixe meu e-book", href: "https://rocketseat.com.br/blog" },
  { label: "Veja meu portfólio", href: "https://app.rocketseat.com.br/projetos" },
  { label: "Conheça meu curso", href: "https://www.rocketseat.com.br/formacao/react" },
];

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

      <Links links={links} />
    </main>
  );
}
