import { Avatar } from "../Avatar";
import { UserName } from "../UserName";

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar />

      <UserName/>
    </div>
  );
}
