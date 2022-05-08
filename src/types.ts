export type Item = {
  id: string;
  label: string;
  children: Item[];
};

export type Tree = Item[];
