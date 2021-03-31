import React, { FC, useContext } from "react";
import { DropdownContext } from "../dropdown-context";

interface ToggleProps {
  className?: string;
}

export const Toggle: FC<ToggleProps> = ({ children, className }) => {
  const { isShown, setIsShown } = useContext(DropdownContext);

  return <div className={className} onClick={() => setIsShown(!isShown)}>{children}</div>;
};
