import { START_DEPTH } from "./constants";
import type { Tree } from ".";

export const createTree = (
  amount: number,
  depth: number,
  currentDepth = START_DEPTH
): Tree => {
  let items = [];
  const children =
    currentDepth >= depth ? [] : createTree(amount, depth, currentDepth + 1);
  for (let i = 0; i < amount; i++) {
    const id = String(i);
    items.push({ id, label: `Item ${id} ${currentDepth}`, children });
  }

  return items;
};
