import React from "react";
import { useIntl } from "react-intl";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { MenuItem } from "@/interfaces";

export const MenuItemComponent: React.FC<MenuItem> = ({
  labelId,
  icon: Icon,
  shortcut,
  onClickAction,
}) => {
  const intl = useIntl();
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={onClickAction}>
      <Icon className="mr-2 h-4 w-4" />
      <span>{intl.formatMessage({ id: labelId })}</span>
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  );
};
