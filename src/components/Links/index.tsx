import { LinkButton } from "../LinkButton";

type Link = {
  label: string;
  href: string;
};

type LinksProps = {
  links: Link[];
};

export function Links({ links }: LinksProps) {
  return (
    <section className="flex flex-col items-center gap-4 w-full">
      {links.map((link, index) => (
        <LinkButton
          key={`${index}-${link.href}`}
          href={link.href}
          label={link.label}
        />
      ))}
    </section>
  );
}
