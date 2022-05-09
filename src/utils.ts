import { START_DEPTH } from "./constants";
import { Tree } from "./types";

export const createItems = (
  amount: number,
  depth: number,
  currentDepth = START_DEPTH
): Tree => {
  let items = [];
  const children =
    currentDepth >= depth ? [] : createItems(amount, depth, currentDepth + 1);
  for (let i = 0; i < amount; i++) {
    const id = String(i);
    items.push({ id, label: `Item ${id} ${currentDepth}`, children });
  }

  return items;
};
