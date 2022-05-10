import React from "react";
import { MAX_DEPTH } from "../../constants";

import { NodeRenderer, Tree } from "./types";
import { DefaultNodeRenderer } from "./DefaultNodeRenderer";
import { List } from "./List";
import { TreeViewerContextProvider } from "./context";

type Props = {
  NodeRenderer?: NodeRenderer;
  maxDepth?: number;
  children: Tree;
};

export const TreeViewer = ({
  children,
  NodeRenderer = DefaultNodeRenderer,
  maxDepth = MAX_DEPTH,
}: Props) => {
  return (
    <TreeViewerContextProvider value={{ NodeRenderer, maxDepth }}>
      <List nodes={children} depth={1} />
    </TreeViewerContextProvider>
  );
};
