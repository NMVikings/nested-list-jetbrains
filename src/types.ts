import { ReactNode } from "react";

export type Node = {
  id: string;
  label: string;
  children: Node[];
};

export type Tree = Node[];

type ItemRendererProps = {
  node: Node;
  toggle: () => void;
  isOpen: boolean;
  depth: number;
  children: ReactNode;
};

export type ItemRenderer = (props: ItemRendererProps) => JSX.Element;
