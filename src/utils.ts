import { Tree } from "./types";

export const createItems = (amount: number, depth = 0): Tree => {
  let items = [];
  const children = depth === 0 ? [] : createItems(amount, depth - 1);
  for (let i = 0; i < amount; i++) {
    const id = String(i);
    items.push({ id, label: `Item ${id} ${depth}`, children });
  }

  return items;
};
