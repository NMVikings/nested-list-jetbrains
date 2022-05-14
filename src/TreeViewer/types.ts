export type Node = {
  id: string;
  label: string;
  children: Node[];
};

export type Tree = Node[];

type NodeRendererProps = {
  node: Node;
  depth: number;
};

export type NodeRenderer = (props: NodeRendererProps) => JSX.Element;
