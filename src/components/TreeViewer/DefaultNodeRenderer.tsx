import { Expandable } from "./Expandable";
import { ListItem } from "./ListItem";
import type { NodeRenderer } from "./types";

export const DefaultNodeRenderer: NodeRenderer = ({ node, depth }) => (
  <ListItem>
    <Expandable node={node} depth={depth}>
      <span>{node.label}</span>
    </Expandable>
  </ListItem>
);
