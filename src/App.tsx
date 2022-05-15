import React from "react";

import { TreeViewer } from "./TreeViewer";
import { createTree } from "./TreeViewer/createTree";

function App() {
  const tree = createTree(50, 3);
  return <TreeViewer children={tree} />;
}

export default App;
