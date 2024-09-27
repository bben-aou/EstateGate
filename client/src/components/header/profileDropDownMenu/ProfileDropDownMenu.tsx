import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/providers/AuthProvider";
import { useIntl } from "react-intl";
import { MenuItemComponent } from "@/components/header/profileDropDownMenu/MenuDropDownOptions";
import { createMenuItems } from "@/components/header/profileDropDownMenu/profileMenuIOptionsDropDown";
import { Fragment } from "react/jsx-runtime";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { Skeleton } from "@/components/ui/skeleton";
import ProfileAvatar from "@/components/header/profileSection/ProfileAvatar";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfileDropDownMenu = () => {
  const { logout, isLoading, user } = useAuth();

  const intl = useIntl();
  const navigate = useNavigate();

  const menuItems = createMenuItems(logout, navigate);

  const renderedMenuItems = menuItems.map((item) => (
    <Fragment key={item.labelId}>
      <DropdownMenuGroup >
        <MenuItemComponent {...item} />
      </DropdownMenuGroup>
      {item.dividerAfter && <DropdownMenuSeparator />}
    </Fragment>
  ));
  return (
    <DropdownMenu>
      <button>
        <ConditionalRendering
          condition={!isLoading}
          defaultComponent={
            <Skeleton className="hidden md:flex h-full items-center gap-[5px]" />
          }
        >
          <div className="hidden md:flex h-full items-center gap-[5px]">
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-[5px] bg-light-30 px-[11px] py-[4px] rounded-full cursor-pointer">
                <button className="rounded-full w-[45px] h-[45px]">
                  <ProfileAvatar
                    avatarClassName="w-[39px] h-[39px]"
                    alt="profile Picture"
                  />
                </button>
                <h1 className="max-w-[150px] truncate font-medium tracking-wide text-black cursor-pointer">
                  {`${user?.firstName} ${user?.lastName}`}
                </h1>
                <MdOutlineKeyboardArrowDown className="text-black w-[20px] h-[22px]" />
              </div>
            </DropdownMenuTrigger>

            <IoNotifications className="w-[22px] h-[22px] text-random-30 mx-[10px] cursor-pointer" />
          </div>
        </ConditionalRendering>
      </button>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {intl.formatMessage({
            id: "header.profileDropDownMenu.items.MyAccountLabel",
          })}
        </DropdownMenuLabel>
        {renderedMenuItems}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileDropDownMenu;
