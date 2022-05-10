import React from "react";

import { Tree } from "./types";
import { ListItem } from "./ListItem";

type Props = {
  nodes: Tree;
  depth: number;
};

export const List = ({ nodes, depth }: Props) => {
  return (
    <ul>
      {nodes.map((node) => (
        <ListItem key={node.id} node={node} depth={depth} />
      ))}
    </ul>
  );
};
