import Link from "next/link";

type LinkButtonProps = {
  label: string;
  href: string;
};

export function LinkButton({
  href,
  label,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="
        px-6 py-4
        w-full md:w-135
        text-md text-center
        bg-surface hover:bg-surface-hover
        border border-border rounded-lg
      "
    >
      {label}
    </Link>
  );
}
