type UserNameProps = {
  username: string;
};

export function UserName({ username }: UserNameProps) {
  return (
    <h4 className="text-md">
      @{username}
    </h4>
  );
}
