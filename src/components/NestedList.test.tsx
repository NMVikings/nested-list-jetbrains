import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { NestedList } from "./NestedList";
import { createItems } from "../utils";

test("renders only top level by default", () => {
  const amount = 5;
  const depth = 10;
  const items = createItems(amount, depth);
  render(<NestedList children={items} />);

  for (let currentDepth = 0; currentDepth <= depth; currentDepth++) {
    const regex = new RegExp(`Item \\d ${currentDepth}`);
    const elements = screen.queryAllByText(regex);
    const expectedAmount = currentDepth > 0 ? 0 : amount;
    expect(elements.length).toBe(expectedAmount);
  }
});

test("new levels are opened by click and renders only 3 levels in depth", () => {
  const amount = 5;
  const depth = 10;
  const items = createItems(amount, depth);
  render(<NestedList children={items} />);

  const topLevelElement = screen.queryByText(/Item 2 0/)!;
  expect(topLevelElement).toBeInTheDocument();

  fireEvent.click(topLevelElement);
  const secondLevelElements = screen.queryAllByText(/Item \d 1/);
  expect(secondLevelElements.length).toBe(amount);

  fireEvent.click(secondLevelElements[0]);
  const thirdLevelElements = screen.queryAllByText(/Item \d 2/);
  expect(thirdLevelElements.length).toBe(amount);

  fireEvent.click(thirdLevelElements[0]);
  const fourthLevelElements = screen.queryAllByText(/Item \d 3/);
  expect(fourthLevelElements.length).toBe(0);

  fireEvent.click(topLevelElement);
  expect(screen.queryAllByText(/Item \d 1/).length).toBe(0);
  expect(screen.queryAllByText(/Item \d 2/).length).toBe(0);
});
