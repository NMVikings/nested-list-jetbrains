import React from "react";

import { Tree } from "../../types";
import { ListItem } from "./ListItem";

export type NestedListProps = {
  children: Tree;
  depth: number;
};

export const NestedList = ({ children, depth }: NestedListProps) => {
  return (
    <ul>
      {children.map((child) => (
        <ListItem key={child.id} node={child} depth={depth} />
      ))}
    </ul>
  );
};
