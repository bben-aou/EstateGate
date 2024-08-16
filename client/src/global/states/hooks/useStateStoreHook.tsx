import { useState } from "react"

export const useHeaderStates = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false);
    return { isHamburgerMenuOpen, setIsHamburgerMenuOpen }
}