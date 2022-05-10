import React, { useContext } from "react";
import { DefaultNodeRenderer } from "../DefaultNodeRenderer";

const TreeViewerContext = React.createContext({
  NodeRenderer: DefaultNodeRenderer,
});

export const useItem = () => useContext(TreeViewerContext).NodeRenderer;

export const TreeViewerContextProvider = TreeViewerContext.Provider;
