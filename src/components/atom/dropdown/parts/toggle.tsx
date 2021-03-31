import React, { FC, useContext } from "react";
import { DropdownContext } from "../dropdown-context";

export const Toggle: FC = ({ children }) => {
  const { isShown, setIsShown } = useContext(DropdownContext);

  return <div onClick={() => setIsShown(!isShown)}>{children}</div>;
};
