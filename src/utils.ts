export const createItems = (amount: number) => {
  let items = [];
  for (let i = 0; i < amount; i++) {
    const id = String(i);
    items.push({ id, label: `Item ${id}`, children: [] });
  }

  return items;
};
