import { IconType } from "react-icons";

export type IStaticItems = {
    title?: string;
    value: number;
    subTitle?: string;
    Icon: IconType;
    valueClassName? : string;
    className?: string;
    iconClassName?: string;
    dividerClassName?: string;
  };