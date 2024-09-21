import { useAuth } from "@/providers/AuthProvider";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { IoNotifications } from "react-icons/io5";
import ConditionalRendering from "../common/ConditionalRendering";
import { Skeleton } from "../ui/skeleton";

const LoggedInUser = () => {
  const { isLoading } = useAuth();

  return (
    <div className=" h-full  flex items-center gap-[5px]">
      <div className="w-[90px] h-full flex items-center justify-end ">
        <ConditionalRendering
          condition={!isLoading}
          defaultComponent={
            <Skeleton className="rounded-full hover:outline hover:outline-3 hover:outline-light-60" />
          }
        >
          <Avatar className="w-[45%] h-[45%]  flex items-center justify-center cursor-pointer ">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="profile image"
              className="rounded-full hover:outline hover:outline-3 hover:outline-light-60"
            />
          </Avatar>
        </ConditionalRendering>
      </div>
      <IoNotifications className="w-[20px] h-[20px] text-random-30 mx-[10px] cursor-pointer" />
    </div>
  );
};
export default LoggedInUser;
