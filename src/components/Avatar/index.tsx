import Image from "next/image";

type AvatarProps = {
  avatarUrl: string;
};

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <Image
      src={avatarUrl}
      className="rounded-full w-28 h-28 object-cover ring-2 ring-border"
      alt="Avatar"
      width={112}
      height={112}
    />
  );
}
