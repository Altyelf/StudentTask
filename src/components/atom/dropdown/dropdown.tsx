import React, { FC, useState } from "react";
import { DropdownContext } from "./dropdown-context";
import "./dropdown.scss";
import { Item } from "./parts/item";
import { List } from "./parts/list";
import { Toggle } from "./parts/toggle";

export const Dropdown: FC & {
  Toggle: typeof Toggle;
  List: typeof List;
  Item: typeof Item;
} = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <DropdownContext.Provider value={{ isShown, setIsShown }}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;
