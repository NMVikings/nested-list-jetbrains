import React from "react";

import { Tree } from "../types";
import { ListItem } from "./ListItem";

type Props = {
  children: Tree;
};

export const NestedList = ({ children }: Props) => (
  <ul>
    {children.map((child) => (
      <ListItem key={child.id} item={child} />
    ))}
  </ul>
);
