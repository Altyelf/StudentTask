import React, { FC, useState } from "react";
import { DropdownContext } from "./dropdown-context";
import { Item } from "./parts/item";
import { List } from "./parts/list";
import { Toggle } from "./parts/toggle";

interface DropdownProps {
  className?: string;
}

export const Dropdown: FC<DropdownProps> & {
  Toggle: typeof Toggle;
  List: typeof List;
  Item: typeof Item;
} = ({ children, className }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={className}>
      <DropdownContext.Provider value={{ isShown, setIsShown }}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;
