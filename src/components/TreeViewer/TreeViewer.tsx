import React from "react";
import { START_DEPTH } from "../../constants";

import { ItemRenderer, Tree } from "../../types";
import { DefaultItem } from "../DefaultItem";
import { NestedList } from "./NestedList";
import { TreeViewerContextProvider } from "./context";

type Props = {
  Item?: ItemRenderer;
  depth?: number;
  children: Tree;
};

export const TreeViewer = ({
  children,
  Item = DefaultItem,
  depth = START_DEPTH,
}: Props) => {
  return (
    <TreeViewerContextProvider value={{ Item }}>
      <NestedList children={children} depth={depth} />
    </TreeViewerContextProvider>
  );
};
