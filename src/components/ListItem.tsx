import React from "react";

import { Item } from "../types";
import { NestedList } from "./NestedList";

type Props = {
  item: Item;
  depth: number;
};

export const ListItem = ({ item: { children, label }, depth }: Props) => {
  return (
    <li>
      <span>{label}</span>
      {children.length && <NestedList children={children} depth={depth + 1} />}
    </li>
  );
};
