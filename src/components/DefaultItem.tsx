import { ItemRenderer } from "../types";

export const DefaultItem: ItemRenderer = ({ node, toggle, children }) => (
  <li>
    <span onClick={toggle}>{node.label}</span>
    {children}
  </li>
);
