import React, { useContext } from "react";
import type { NodeRenderer } from ".";

type TreeViewerContextType = {
  NodeRenderer: NodeRenderer;
  maxDepth: number;
};

const TreeViewerContext = React.createContext<TreeViewerContextType>(
  {} as TreeViewerContextType
);

const useTreeViewContext = () => useContext(TreeViewerContext);

export const useNodeRenderer = () => useTreeViewContext().NodeRenderer;
export const useMaxDepth = () => useTreeViewContext().maxDepth;

export const TreeViewerContextProvider = TreeViewerContext.Provider;
