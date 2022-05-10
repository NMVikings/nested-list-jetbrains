import React, { useContext } from "react";
import { DefaultItem } from "../DefaultItem";

const TreeViewerContext = React.createContext({ Item: DefaultItem });

export const useItem = () => useContext(TreeViewerContext).Item;

export const TreeViewerContextProvider = TreeViewerContext.Provider;
