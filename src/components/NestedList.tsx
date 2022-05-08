import React from "react";

import { MAX_DEPTH } from "../constants";
import { Tree } from "../types";
import { ListItem } from "./ListItem";

type Props = {
  children: Tree;
  depth?: number;
};

export const NestedList = ({ children, depth = 0 }: Props) => {
  if (depth > MAX_DEPTH) {
    return null;
  }

  return (
    <ul>
      {children.map((child) => (
        <ListItem key={child.id} item={child} depth={depth} />
      ))}
    </ul>
  );
};
