import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { TreeViewer, ListItem, Expandable } from "..";
import type { NodeRenderer } from "..";

import { createTree } from "../createTree";
import { START_DEPTH } from "../constants";

test("renders only top level by default", () => {
  const amount = 5;
  const depth = 3;
  const items = createTree(amount, depth);
  render(<TreeViewer children={items} />);

  for (let currentDepth = START_DEPTH; currentDepth <= depth; currentDepth++) {
    const regex = new RegExp(`Item \\d ${currentDepth}`);
    const elements = screen.queryAllByText(regex);
    const expectedAmount = currentDepth > 1 ? 0 : amount;
    expect(elements).toHaveLength(expectedAmount);
  }
});

test("new levels are opened by click and renders only 3 levels in depth", () => {
  const amount = 5;
  const depth = 3;
  const items = createTree(amount, depth);
  render(<TreeViewer children={items} />);

  const topLevelElement = screen.queryByText(/Item 2 1/)!;
  expect(topLevelElement).toBeInTheDocument();

  fireEvent.click(topLevelElement);
  const secondLevelElements = screen.queryAllByText(/Item \d 2/);
  expect(secondLevelElements).toHaveLength(amount);

  fireEvent.click(secondLevelElements[0]);
  const thirdLevelElements = screen.queryAllByText(/Item \d 3/);
  expect(thirdLevelElements).toHaveLength(amount);

  fireEvent.click(thirdLevelElements[0]);
  const fourthLevelElements = screen.queryAllByText(/Item \d 4/);
  expect(fourthLevelElements).toHaveLength(0);

  fireEvent.click(topLevelElement);
  expect(screen.queryAllByText(/Item \d 2/)).toHaveLength(0);
  expect(screen.queryAllByText(/Item \d 3/)).toHaveLength(0);
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
  expect(elements).toHaveLength(amount);

  fireEvent.click(elements[0]);
  const secondLevelElements = screen.queryAllByText(/Custom Item \d 2 4/);
  expect(secondLevelElements).toHaveLength(amount);
});
