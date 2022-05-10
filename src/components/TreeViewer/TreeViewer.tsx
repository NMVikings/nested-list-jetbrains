import React from "react";
import { START_DEPTH } from "../../constants";

import { NodeRenderer, Tree } from "./types";
import { DefaultNodeRenderer } from "../DefaultNodeRenderer";
import { NestedList } from "./NestedList";
import { TreeViewerContextProvider } from "./context";

type Props = {
  NodeRenderer?: NodeRenderer;
  depth?: number;
  children: Tree;
};

export const TreeViewer = ({
  children,
  NodeRenderer = DefaultNodeRenderer,
  depth = START_DEPTH,
}: Props) => {
  return (
    <TreeViewerContextProvider value={{ NodeRenderer }}>
      <NestedList children={children} depth={depth} />
    </TreeViewerContextProvider>
  );
};
