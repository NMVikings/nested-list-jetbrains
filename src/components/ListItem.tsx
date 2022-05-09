import React, { useState, useCallback } from "react";
import { MAX_DEPTH } from "../constants";

import { Item, ItemRenderer } from "../types";
import { NestedList } from "./NestedList";

type Props = {
  item: Item;
  Item: ItemRenderer;
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

export const ListItem = ({ item, depth, Item }: Props) => {
  const [isOpen, toggle] = useToggle(false);

  const canNestedListBeShown = item.children.length !== 0 && depth < MAX_DEPTH;
  const isNestedListVisible = canNestedListBeShown && isOpen;

  return (
    <Item
      item={item}
      isOpen={isOpen}
      toggle={canNestedListBeShown ? toggle : noop}
      depth={depth}
    >
      {isNestedListVisible && (
        <NestedList children={item.children} depth={depth + 1} Item={Item} />
      )}
    </Item>
  );
};
