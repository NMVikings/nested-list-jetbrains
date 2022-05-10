import { ReactNode } from "react";

export type Node = {
  id: string;
  label: string;
  children: Node[];
};

export type Tree = Node[];

type NodeRendererProps = {
  node: Node;
  toggle: () => void;
  isOpen: boolean;
  depth: number;
  children: ReactNode;
};

export type NodeRenderer = (props: NodeRendererProps) => JSX.Element;
