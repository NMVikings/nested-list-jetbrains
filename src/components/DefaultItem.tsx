import { ItemRenderer } from "../types";

export const DefaultItem: ItemRenderer = ({
  item,
  toggle,
  depth,
  children,
}) => (
  <li>
    <span onClick={toggle}>{item.label}</span>
    {children}
  </li>
);
