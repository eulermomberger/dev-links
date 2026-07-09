import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-sm text-center text-text">
      Feito com ♥ pela {""}
      <Link
        href="https://rocketseat.com.br"
        className="underline"
        target="_blank"
      >
        Rocketseat
      </Link>
    </footer>
  );
}
