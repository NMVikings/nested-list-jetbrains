import React from "react";
import { START_DEPTH } from "../constants";

import { ItemRenderer, Tree } from "../types";
import { DefaultItem } from "./DefaultItem";
import { ListItem } from "./ListItem";

type Props = {
  children: Tree;
  depth?: number;
  Item?: ItemRenderer;
};

export const NestedList = ({
  children,
  Item = DefaultItem,
  depth = START_DEPTH,
}: Props) => {
  return (
    <ul>
      {children.map((child) => (
        <ListItem key={child.id} item={child} depth={depth} Item={Item} />
      ))}
    </ul>
  );
};
