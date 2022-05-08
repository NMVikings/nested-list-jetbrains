import React from "react";
import { render, screen } from "@testing-library/react";

import { NestedList } from "./NestedList";
import { createItems } from "../utils";
import { MAX_DEPTH } from "../constants";

test("renders only 3 levels of children", () => {
  const amount = 5;
  const depth = 10;
  const items = createItems(amount, depth);
  render(<NestedList children={items} />);

  for (let currentDepth = 0; currentDepth <= depth; currentDepth++) {
    const regex = new RegExp(`Item \\d ${currentDepth}`);
    const elements = screen.queryAllByText(regex);
    const expectedAmount =
      currentDepth > MAX_DEPTH ? 0 : amount ** (currentDepth + 1);
    expect(elements.length).toBe(expectedAmount);
  }
});
