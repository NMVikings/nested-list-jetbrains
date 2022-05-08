import React from "react";

import { NestedList } from "./components/NestedList";
import { createItems } from "./utils";

function App() {
  const items = createItems(10);
  return <NestedList children={items} />;
}

export default App;
