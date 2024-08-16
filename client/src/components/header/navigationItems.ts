import { HiHome } from "react-icons/hi2";
import { PiNewspaperFill } from "react-icons/pi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdRealEstateAgent } from "react-icons/md";
import { TNavItems } from "@interfaces/index";



export const navItems : TNavItems[] = [
    {id : 1, messageId : "menuItemsHome" , defaultMessage: "Home", path : "/", Icon : HiHome},
    {id : 2, messageId : "menuItemsAbout" , defaultMessage: "About", path : "/about", Icon : PiNewspaperFill},
    {id : 3, messageId : "menuItemsContact" , defaultMessage: "Contact", path : "/contact", Icon : BiSolidMessageSquareDetail},
    {id : 4, messageId : "menuItemsAgents" , defaultMessage: "Agents", path : "/agents", Icon : MdRealEstateAgent},
]