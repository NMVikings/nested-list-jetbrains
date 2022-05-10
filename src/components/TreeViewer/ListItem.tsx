import React, { useState, useCallback } from "react";
import { MAX_DEPTH } from "../../constants";

import { Node } from "../../types";
import { NestedList } from "./NestedList";
import { useItem } from "./context";

type Props = {
  node: Node;
  depth: number;
};

const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(defaultValue);

  const toggle = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return [bool, toggle];
};

const noop = () => {};

export const ListItem = ({ node, depth }: Props) => {
  const Item = useItem();
  const [isOpen, toggle] = useToggle(false);

  const canNestedListBeShown = node.children.length !== 0 && depth < MAX_DEPTH;
  const isNestedListVisible = canNestedListBeShown && isOpen;

  return (
    <Item
      node={node}
      isOpen={isOpen}
      toggle={canNestedListBeShown ? toggle : noop}
      depth={depth}
    >
      {isNestedListVisible && (
        <NestedList children={node.children} depth={depth + 1} />
      )}
    </Item>
  );
};
