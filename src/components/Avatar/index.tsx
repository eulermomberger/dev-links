import Image from "next/image";

type AvatarProps = {
  avatarUrl: string;
};

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <Image
      src={avatarUrl}
      alt="Avatar"
      width={112}
      height={112}
    />
  );
}
