import React, { useState, useCallback } from "react";
import { MAX_DEPTH } from "../constants";

import { Item } from "../types";
import { NestedList } from "./NestedList";

type Props = {
  item: Item;
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

export const ListItem = ({ item: { children, label }, depth }: Props) => {
  const [isOpen, toggle] = useToggle(false);

  const canNestedListBeShown = children.length !== 0 && depth < MAX_DEPTH;
  const isNestedListVisible = canNestedListBeShown && isOpen;

  return (
    <li>
      <span onClick={canNestedListBeShown ? toggle : noop}>{label}</span>
      {isNestedListVisible && (
        <NestedList children={children} depth={depth + 1} />
      )}
    </li>
  );
};
