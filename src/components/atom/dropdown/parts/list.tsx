import React, { FC, useContext } from "react";
import { DropdownContext } from "../dropdown-context";

interface ListProps {
  className?: string;
}

export const List: FC<ListProps> = ({ children, className }) => {
  const { isShown } = useContext(DropdownContext);

  return isShown ? <div className={className}>{children}</div> : null;
};
