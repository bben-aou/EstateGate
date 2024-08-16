import { useHeaderContext } from '@global/states/hooks/useHeaderContext';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
type IHamburgerMenuItem = {
    Icon? : IconType
    path : string
    label : string;
};
const HamburgerMenuItem = (props : IHamburgerMenuItem) => {
    const { Icon , label , path } = props;
  const { setIsHamburgerMenuOpen } = useHeaderContext();
  const handleCloseHamburgerMenuOnNavigation = () => {
    setIsHamburgerMenuOpen(false);
  }

  return (
    <NavLink
      to={path}
      onClick={handleCloseHamburgerMenuOnNavigation}
      className={({ isActive }) =>
        `flex items-center ${
          isActive
            ? "rounded-[10px] text-light-0 px-[7px] bg-light-70 h-[50px]"
            : "text-dark-10 px-[7px] h-[50px]"
        }`
      }
     >
        {Icon && <Icon className="h-[25px] w-[25px] pb-[1px]" />}
        <h1 className="mx-[10px] text-[14px] font-semibold">{label}</h1>
    </NavLink>
  );
};
export default HamburgerMenuItem;
