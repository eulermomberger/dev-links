import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/assets/avatar.png"
      alt="Avatar"
      width={112}
      height={112}
    />
  );
}
