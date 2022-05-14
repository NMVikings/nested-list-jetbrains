import React from "react";

import { Tree } from "../../types";
import { useNodeRenderer } from "../../context";

import styles from "./List.module.css";

type Props = {
  nodes: Tree;
  depth: number;
};

export const List = ({ nodes, depth }: Props) => {
  const NodeRenderer = useNodeRenderer();

  return (
    <ul className={styles.list}>
      {nodes.map((node) => (
        <NodeRenderer key={node.id} node={node} depth={depth} />
      ))}
    </ul>
  );
};
