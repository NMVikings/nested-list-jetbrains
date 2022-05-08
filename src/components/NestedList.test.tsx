import React from "react";
import { render, screen } from "@testing-library/react";

import { NestedList } from "./NestedList";
import { createItems } from "../utils";

test("renders top level elements", () => {
  const items = createItems(5);
  render(<NestedList children={items} />);

  for (let item of items) {
    const el = screen.getByText(item.label);
    expect(el).toBeInTheDocument();
  }
});

test("renders second level elements", () => {
  const items = createItems(1, 1);
  render(<NestedList children={items} />);

  for (let { children } of items) {
    for (let child of children) {
      const el = screen.getByText(child.label);
      expect(el).toBeInTheDocument();
    }
  }
});

test("renders three tiers of elements", () => {
  const amount = 10;
  const depth = 2;
  const items = createItems(amount, depth);
  render(<NestedList children={items} />);

  for (let d = depth; d >= 0; d--) {
    for (let i = 0; i < amount; i++) {
      const label = `Item ${i} ${d}`;
      const elements = screen.queryAllByText(label);
      expect(elements.length).toBe(amount ** (depth - d));
    }
  }
});

test("doesn't render fourth tier elements", () => {
  const amount = 2;
  const depth = 3;
  const items = createItems(amount, depth);
  render(<NestedList children={items} />);

  const topLevel = screen.queryAllByText(/Item \d 3/i);
  expect(topLevel.length).toBe(amount);
  const secondLevel = screen.queryAllByText(/Item \d 2/i);
  expect(secondLevel.length).toBe(amount ** 2);
  const thirdLevel = screen.queryAllByText(/Item \d 1/i);
  expect(thirdLevel.length).toBe(amount ** 3);
  const fourthLevel = screen.queryAllByText(/Item \d 0/i);
  expect(fourthLevel.length).toBe(0);
});
