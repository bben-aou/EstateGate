import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type TNavItems = {
    id : number ;
    messageId : string;
    defaultMessage : string;
    path : string;
    Icon?: IconType; 
}

export type MenuItem = {
    labelId: string;
    icon: LucideIcon;
    shortcut: string;
    onClickAction: () => void;
    dividerAfter?: boolean;
  };