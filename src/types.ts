import { ReactNode } from "react";

export type Item = {
  id: string;
  label: string;
  children: Item[];
};

export type Tree = Item[];

type ItemRendererProps = {
  item: Item;
  toggle: () => void;
  isOpen: boolean;
  depth: number;
  children: ReactNode;
};

export type ItemRenderer = (props: ItemRendererProps) => JSX.Element;
