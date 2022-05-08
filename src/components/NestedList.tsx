import React from "react";

import { Tree } from "../types";
import { ListItem } from "./ListItem";

type Props = {
  children: Tree;
  depth?: number;
};

export const NestedList = ({ children, depth = 0 }: Props) => {
  return (
    <ul>
      {children.map((child) => (
        <ListItem key={child.id} item={child} depth={depth} />
      ))}
    </ul>
  );
};
