import React from "react";

import { TreeViewer } from "./components/TreeViewer/TreeViewer";
import { createItems } from "./utils";

function App() {
  const items = createItems(2, 3);
  return <TreeViewer children={items} />;
}

export default App;
