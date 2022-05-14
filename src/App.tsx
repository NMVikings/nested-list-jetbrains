import React from "react";

import { TreeViewer } from "./TreeViewer";
import { createTree } from "./TreeViewer/createTree";

function App() {
  const tree = createTree(5, 10);
  return <TreeViewer children={tree} />;
}

export default App;
