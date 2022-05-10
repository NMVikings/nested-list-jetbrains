import React from "react";

import TreeViewer from "./components/TreeViewer";
import { createTree } from "./components/TreeViewer/createTree";

function App() {
  const tree = createTree(5, 10);
  return <TreeViewer children={tree} />;
}

export default App;
