import React from "react";

import { Item } from "../types";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => <li>{item.label}</li>;
