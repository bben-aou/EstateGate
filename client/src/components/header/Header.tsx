import { FormattedMessage, useIntl } from "react-intl";
import { navItems, TNavItems } from "@components/header/navigationItems";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "@components/buttons/LoginButton";
import SignUpButton from "@components/buttons/SignUpButton";
import { RiMenu5Fill as OpenMenuIcon } from "react-icons/ri";

const Header = () => {
  const intl = useIntl();
  const navigationItems = navItems.map((navItem: TNavItems) => {
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
    <header className="w-full h-[8vh] md:flex md:items-center md:justify-between px-[25px] md:px-[70px] border-b-[1px] border-light-30">
      <nav className="h-full flex justify-between items-center md:flex-row md:justify-start md:gap-[100px]">
        <Link
          to={"/"}
          className="font-inter font-semibold text-[22px] cursor-pointer text-light-60"
        >
          {intl.formatMessage({ id : 'logoTitle'})}
        </Link>
        <OpenMenuIcon className=" md:hidden w-[22px] h-[22px] text-light-60"/>
        <ul className=" hidden md:flex items-center gap-[30px]">{navigationItems}</ul>
      </nav>
      <div className="hidden md:flex h-full  items-center gap-[20px]">
        <LoginButton
            label={intl.formatMessage({ id: "authenticationLogin" })}
            redirectionPath={"/login"}
        />
       <SignUpButton
            label={intl.formatMessage({ id: "authenticationSignUp" })}
            redirectionPath={"/sign-up"}
       />
      </div>
    </header>
  );
};
export default Header;
