import React, { FC, useContext } from "react";
import { DropdownContext } from "../dropdown-context";

export const List: FC = ({ children }) => {
  const { isShown } = useContext(DropdownContext);

  return isShown ? <div>{children}</div> : null;
};
