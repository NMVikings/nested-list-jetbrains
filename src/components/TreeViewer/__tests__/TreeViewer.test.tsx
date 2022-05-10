import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import TreeViewer, { ListItem, Expandable } from "..";
import type { NodeRenderer } from "..";

import { createTree } from "../createTree";

const getToggleElement = (node: HTMLElement): Element =>
  // eslint-disable-next-line
  node.parentNode?.querySelector("i[data-toggle]")!;

test("renders only top level by default", () => {
  const amount = 5;
  const depth = 10;
  const items = createTree(amount, depth);
  render(<TreeViewer children={items} />);

  for (let currentDepth = 1; currentDepth <= depth; currentDepth++) {
    const regex = new RegExp(`Item \\d ${currentDepth}`);
    const elements = screen.queryAllByText(regex);
    const expectedAmount = currentDepth > 1 ? 0 : amount;
    expect(elements.length).toBe(expectedAmount);
  }
});

test("new levels are opened by click and renders only 3 levels in depth", () => {
  const amount = 5;
  const depth = 10;
  const items = createTree(amount, depth);
  render(<TreeViewer children={items} />);

  const topLevelElement = screen.queryByText(/Item 2 1/)!;
  expect(topLevelElement).toBeInTheDocument();

  fireEvent.click(getToggleElement(topLevelElement));
  const secondLevelElements = screen.queryAllByText(/Item \d 2/);
  expect(secondLevelElements.length).toBe(amount);

  fireEvent.click(getToggleElement(secondLevelElements[0]));
  const thirdLevelElements = screen.queryAllByText(/Item \d 3/);
  expect(thirdLevelElements.length).toBe(amount);
  expect(getToggleElement(thirdLevelElements[0])).not.toBeInTheDocument();

  fireEvent.click(getToggleElement(topLevelElement));
  expect(screen.queryAllByText(/Item \d 2/).length).toBe(0);
  expect(screen.queryAllByText(/Item \d 3/).length).toBe(0);
});

test("renders with custom item renderer", () => {
  const amount = 10;
  const depth = 2;
  const items = createTree(amount, depth);

  const CustomItem: NodeRenderer = ({ node, depth }) => {
    return (
      <ListItem>
        <Expandable node={node} depth={depth}>
          <span>
            Custom {node.label} {depth * 2}
          </span>
        </Expandable>
      </ListItem>
    );
  };

  render(<TreeViewer children={items} NodeRenderer={CustomItem} />);

  const elements = screen.queryAllByText(/Custom Item \d 1 2/);
  expect(elements.length).toBe(amount);

  fireEvent.click(getToggleElement(elements[0]));
  const secondLevelElements = screen.queryAllByText(/Custom Item \d 2 4/);
  expect(secondLevelElements.length).toBe(amount);
});
