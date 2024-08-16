import { THeaderProvider } from "@interfaces/providers/types";
import { useHeaderStates } from "@global/states/hooks/useStateStoreHook";
import { HeaderContext } from "../contexts/HeaderContext";
import { useMemo } from "react";

export const HeaderProvider = ({ children }: THeaderProvider) => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useHeaderStates();
  const memoizedValue = useMemo(
    () => ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen }),
    [isHamburgerMenuOpen, setIsHamburgerMenuOpen]
  );
  console.log('inside here ')
  return (
    <HeaderContext.Provider value={memoizedValue}>
      {children}
    </HeaderContext.Provider>
  );
};
