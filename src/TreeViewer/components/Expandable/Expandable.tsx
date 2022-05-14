import React, { useCallback, ReactNode, KeyboardEventHandler } from "react";
import classNames from "classnames";

import { Node } from "../../types";

import { useExpandable } from "./useExpandable";

import styles from "./Expandable.module.css";

type Props = {
  node: Node;
  depth: number;
  children: ReactNode;
};

export const Expandable = ({ node, depth, children }: Props) => {
  const { nodesChildren, toggle, isExpanded, canBeExpanded } = useExpandable(
    node,
    depth
  );

  const handleKeyDown: KeyboardEventHandler = useCallback(
    ({ key }) => {
      if (key === "Enter") {
        toggle();
      }
    },
    [toggle]
  );

  return (
    <>
      <span
        tabIndex={canBeExpanded ? 0 : undefined}
        className={classNames(styles.itemContent, {
          [styles.expandable]: canBeExpanded,
        })}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <i
          className={classNames(
            styles.toggleButton,
            isExpanded ? styles.expanded : styles.collapsed
          )}
        />
        {children}
      </span>
      {nodesChildren}
    </>
  );
};
