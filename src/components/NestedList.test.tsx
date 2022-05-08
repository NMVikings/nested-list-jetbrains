import React from "react";
import { render, screen } from "@testing-library/react";

import { NestedList } from "./NestedList";
import { createItems } from "../utils";

test("renders Nested list with single element", () => {
  const items = createItems(5);
  render(<NestedList children={items} />);

  for (let item of items) {
    const el = screen.getByText(item.label);
    expect(el).toBeInTheDocument();
  }
});
