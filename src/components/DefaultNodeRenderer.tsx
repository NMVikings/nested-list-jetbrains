import type { NodeRenderer } from "./TreeViewer/types";

export const DefaultNodeRenderer: NodeRenderer = ({
  node,
  toggle,
  children,
}) => (
  <li>
    <span onClick={toggle}>{node.label}</span>
    {children}
  </li>
);
