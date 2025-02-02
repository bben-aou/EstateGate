import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

type TProfileAvatar = {
  avatarUrl?: string;
  alt?: string;
  containerClassName?: string;
  avatarClassName?: string;
};
const ProfileAvatar = (props: TProfileAvatar) => {
  const { avatarUrl, alt, containerClassName, avatarClassName } = props;
  return (
    <Avatar
      className={cn("rounded-full w-[45px] h-[45px]", containerClassName)}
    >
      <AvatarImage
        src={avatarUrl ?? "https://github.com/shadcn.png"}
        alt={alt ?? "profile image"}
        className={cn(
          "object-cover rounded-full hover:outline hover:outline-3 hover:outline-light-60",
          avatarClassName
        )}
      />
    </Avatar>
  );
};

export default ProfileAvatar;
