import { CgClose } from "react-icons/cg";
import { useIntl } from "react-intl";
import { navItems } from "@components/header/navigationItems";
import HamburgerMenuItem from "@components/header/hamburgerMenu/HamburgerMenuItem";
import { TNavItems } from "@interfaces/index";
import { NavLink } from "react-router-dom";
import { useHeaderContext } from "@global/states/hooks/useHeaderContext";

const HamburgerMenu = () => {
  const intl = useIntl();
  const { setIsHamburgerMenuOpen } = useHeaderContext();

  const handleCloseHamburgerMenuOnNavigation = () => {
    setIsHamburgerMenuOpen(false);
  }
  const navigationItems = navItems.map((navItem: TNavItems) => {
    return (
      <HamburgerMenuItem
        key={navItem?.id}
        path={navItem?.path}
        Icon={navItem?.Icon}
        label={intl.formatMessage({
          id: navItem?.messageId ?? navItem?.defaultMessage,
        })}
      />
    );
  });
  return (
    <div className="md:hidden absolute flex flex-col h-full w-[75%] ml-[25%] bg-light-20 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.1)]">
      <div className="w-full h-[10vh] flex items-center justify-end px-[25px]">
        <CgClose className="md:hidden w-[22px] h-[22px] text-light-60" onClick={()=> {setIsHamburgerMenuOpen(false)}}/>
      </div>
      <div className=" w-full flex items-center justify-center py-[20px] text-[21px] mx-auto ">
        <img src="EstateGateLogo.svg" alt="logo" />
        <h1 className="pl-[4px] font-normal tracking-[0.02rem]">
          <span className="text-light-60">E</span>state
          <span className="text-light-60">G</span>ate
        </h1>
      </div>
      <div className="w-full flex flex-col py-[10%] gap-[20%] h-full px-[20px]">
        <nav>{navigationItems}</nav>
        <div className="w-full flex flex-col items-center gap-[8px] ">
          <NavLink
            to={"/login"}
            onClick={handleCloseHamburgerMenuOnNavigation}
            className={({ isActive }) =>
              `w-[160px] flex items-center justify-center rounded-full h-[45px]  ${
                isActive
                  ? "text-light-60 border-[1px] border-light-60"
                  : "text-dark-10 border-[1px] border-dark-10"
              }`
            }
          >
            {intl.formatMessage({ id : 'authenticationLogin' })}
          </NavLink>
          <NavLink
            to={"/sign-up"}
            onClick={handleCloseHamburgerMenuOnNavigation}
            className={({ isActive }) =>
              `w-[160px] flex items-center justify-center rounded-full h-[45px]  ${
                isActive
                  ? "text-light-60 border-[1px] border-light-60"
                  : "text-dark-10 border-[1px] border-dark-10"
              }`
            }
          >
            {intl.formatMessage({ id : 'authenticationSignUp' })}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
