import { FormattedMessage, useIntl } from "react-intl";
import { navItems } from "@components/header/navigationItems";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "@components/buttons/LoginButton";
import SignUpButton from "@components/buttons/SignUpButton";
import { RiMenu5Fill as OpenMenuIcon } from "react-icons/ri";
import { Fragment } from "react/jsx-runtime";
import HamburgerMenu from "@components/header/hamburgerMenu/HamburgerMenu";
import { TNavItems } from "@interfaces/index";
import { useHeaderContext } from "@global/states/hooks/useHeaderContext";
import ConditionalRendering from "@components/common/ConditionalRendering";
import { useAuth } from "@/providers/AuthProvider";
import ProfileDropDownMenu from "@/components/header/profileDropDownMenu/ProfileDropDownMenu";

const Header = () => {
  const intl = useIntl();
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useHeaderContext();
  const { user, isLoading } = useAuth();
  
  const navigationItems = navItems.map((navItem: TNavItems) => {
    //TODO : handle the hamburger Menu Display after login - hide login - signUp -
    return (
      <li key={navItem.id}>
        <NavLink
          to={navItem.path}
          className={({ isActive }) =>
            `font-medium cursor-pointer px-[20px] py-[4px] rounded-full ${
              isActive
                ? "text-black bg-light-30"
                : "hover:text-black hover:bg-light-30"
            }`
          }
        >
          <FormattedMessage
            id={navItem.messageId}
            defaultMessage={navItem.defaultMessage}
          />
        </NavLink>
      </li>
    );
  });
  return (
    <Fragment>
      <header className="absolute w-full h-[8vh] md:flex md:items-center md:justify-between px-[25px] lg:px-[70px] border-b-[1px] border-light-30">
        <nav className="h-full flex justify-between items-center md:flex-row md:justify-start md:gap-[35px] lg:gap-[100px]">
          <Link
            to={"/"}
            className="md:hidden lg:flex font-inter font-semibold text-[22px] cursor-pointer text-light-60"
          >
            {intl.formatMessage({ id: "logoTitle" })}
          </Link>
          <div className="h-full flex items-center">
            <img
              src="/EstateGateLogo.svg"
              alt="logo"
              className="w-[40px] hidden md:flex lg:hidden"
            />
          </div>
          <OpenMenuIcon
            className=" md:hidden w-[22px] h-[22px] text-light-60"
            onClick={() => setIsHamburgerMenuOpen(true)}
          />
          <ul className="hidden md:flex items-center lg:gap-[30px]">
            {navigationItems}
          </ul>
        </nav>
        <ConditionalRendering
          condition={!user && !isLoading}
          defaultComponent={<ProfileDropDownMenu  />}
        >
          <div className="hidden md:flex h-full  items-center md:gap-[5px] lg:gap-[20px]">
            <LoginButton
              label={intl.formatMessage({ id: "authenticationLogin" })}
              redirectionPath={"/login/sign-in"}
            />
            <SignUpButton
              label={intl.formatMessage({ id: "authenticationSignUp" })}
              redirectionPath={"/login/sign-up"}
            />
          </div>
        </ConditionalRendering>
      </header>
      <ConditionalRendering condition={isHamburgerMenuOpen}>
        <HamburgerMenu />
      </ConditionalRendering>
    </Fragment>
  );
};
export default Header;
