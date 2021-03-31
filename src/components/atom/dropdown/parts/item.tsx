import React, { FC } from "react";

interface ItemProps {
  className?: string;
}

export const Item: FC<ItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
