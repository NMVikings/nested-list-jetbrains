import React, { useState, useCallback, ReactNode } from "react";

import { Node } from "./types";
import { List } from "./List";
import { useMaxDepth } from "./context";

type Props = {
  node: Node;
  depth: number;
  children: ReactNode;
};

const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(defaultValue);

  const toggle = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return [bool, toggle];
};

const noop = () => {};

export const useExpandable = (
  node: Node,
  depth: number,
  defaultState = false
) => {
  const [isExpanded, toggleExpandability] = useToggle(defaultState);
  const maxDepth = useMaxDepth();

  const isBeyondMaxDepth = depth >= maxDepth;
  const canBeExpanded = node.children.length !== 0 && !isBeyondMaxDepth;

  const nodesChildren = isExpanded && (
    <List nodes={node.children} depth={depth + 1} />
  );

  return {
    nodesChildren,
    toggle: canBeExpanded ? toggleExpandability : noop,
    isExpanded,
    canBeExpanded,
  };
};

export const Expandable = ({ node, depth, children }: Props) => {
  const { nodesChildren, toggle, isExpanded, canBeExpanded } = useExpandable(
    node,
    depth
  );

  return (
    <>
      {canBeExpanded && (
        <i onClick={toggle} data-toggle>
          {isExpanded.toString()}
        </i>
      )}
      {children}
      {nodesChildren}
    </>
  );
};
