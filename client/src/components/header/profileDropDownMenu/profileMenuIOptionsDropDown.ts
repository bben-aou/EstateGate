import {
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { MenuItem } from "@/interfaces";
import { NavigateFunction } from "react-router-dom";

export const createMenuItems = (
  logout: () => void,
  navigate: NavigateFunction
): MenuItem[] => [
  {
    labelId: "header.profileDropDownMenu.items.profile",
    icon: User,
    shortcut: "⇧⌘P",
    onClickAction: () => navigate('/profile'),
  },
  {
    labelId: "header.profileDropDownMenu.items.Settings",
    icon: Settings,
    shortcut: "⌘S",
    onClickAction: () => navigate('/setting'),
    dividerAfter: true,
  },
  {
    labelId: "header.profileDropDownMenu.items.KeyboardShortcuts",
    icon: Keyboard,
    shortcut: "⌘K",
    onClickAction: () => {},
  },
  {
    labelId: "header.profileDropDownMenu.items.github",
    icon: Github,
    shortcut: "",
    onClickAction: () => {},
  },
  {
    labelId: "header.profileDropDownMenu.items.support",
    icon: LifeBuoy,
    shortcut: "",
    onClickAction: () => {},
    dividerAfter: true,
  },
  {
    labelId: "header.profileDropDownMenu.items.logout",
    icon: LogOut,
    shortcut: "",
    onClickAction: logout,
  },
];
