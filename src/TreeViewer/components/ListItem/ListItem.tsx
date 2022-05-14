import classNames from "classnames";
import React from "react";

import styles from "./ListItem.module.css";

export const ListItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => {
  return <li className={classNames(styles.listItem, className)} {...props} />;
};
