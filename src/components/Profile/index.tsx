import { Avatar } from "../Avatar";
import { UserName } from "../UserName";

type ProfileProps = {
  avatarUrl: string;
  username: string;
};

export function Profile({ avatarUrl, username }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar avatarUrl={avatarUrl} />

      <UserName username={username} />
    </div>
  );
}
