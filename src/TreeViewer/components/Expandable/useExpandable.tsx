import { List } from "../List";
import { useMaxDepth } from "../../context";
import { useToggle } from "../../../hooks/useToggle";

import { Node } from "../..";

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
