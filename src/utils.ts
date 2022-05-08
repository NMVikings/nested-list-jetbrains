import { Tree } from "./types";

export const createItems = (
  amount: number,
  depth = 0,
  currentDepth = 0
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
